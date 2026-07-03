import { useEffect } from 'react';
import { useLocation } from '@docusaurus/router';

// When a URL hash targets content inside a Docusaurus <Tabs>, the target may
// sit in an inactive tab panel (native `hidden` attribute), so the browser
// can't scroll to it. This global effect opens the owning tab (by clicking its
// role="tab" button), then scrolls to the target.
//
// It mirrors MermaidAnchorFix (keyed on useLocation().hash, MutationObserver on
// document.body). The key design point: it acts only once the DOM has gone
// QUIET, and always re-queries the target node. This makes it immune to the
// post-hydration Tabs remount (facebook/docusaurus#5653), which both resets
// tabs to their default AND replaces the panel DOM nodes — a heavier page
// hydrates slower, so a naive "activate then scroll and stop" races that remount
// and ends up scrolling a detached / re-hidden node.
export default function TabAnchorFix() {
  const { hash } = useLocation();

  useEffect(() => {
    if (!hash) return;

    const targetId = decodeURIComponent(hash.slice(1));
    let observer;
    let quietTimer;
    let safetyId;
    let done = false;

    // Runs only when the DOM has been quiet for a beat. Clicking a tab or the
    // hydration remount both mutate the DOM, which reschedules this — so by the
    // time it completes, tabs have settled and the target is stable.
    const act = () => {
      if (done) return;

      const target = document.getElementById(targetId);
      if (!target) return; // not rendered yet; a later mutation reschedules

      const panel = target.closest('[role="tabpanel"]');
      if (panel && panel.hasAttribute('hidden')) {
        // Open the owning tab. Panels and buttons correspond positionally
        // within a container. The click mutates the DOM → act() reschedules →
        // next run finds the panel visible and scrolls.
        const container = panel.closest('.tabs-container');
        if (container) {
          const panels = [...container.querySelectorAll('[role="tabpanel"]')];
          const buttons = [...container.querySelectorAll('[role="tab"]')];
          buttons[panels.indexOf(panel)]?.click();
        }
        return;
      }

      // Target is visible and the DOM is quiet: scroll to it and stop.
      done = true;
      target.scrollIntoView();
      observer?.disconnect();
      clearTimeout(safetyId);
    };

    const schedule = () => {
      clearTimeout(quietTimer);
      quietTimer = setTimeout(act, 250);
    };

    schedule(); // initial attempt once things go quiet
    observer = new MutationObserver(schedule);
    // Watch childList (hydration/remount recreate nodes) AND the `hidden`
    // attribute — switching tabs only toggles `hidden` on the panels, so
    // without this the scroll pass would never fire after we open a tab.
    observer.observe(document.body, {
      childList: true,
      subtree: true,
      attributes: true,
      attributeFilter: ['hidden'],
    });
    safetyId = setTimeout(() => observer?.disconnect(), 8000);

    return () => {
      observer?.disconnect();
      clearTimeout(quietTimer);
      clearTimeout(safetyId);
    };
  }, [hash]);

  return null;
}
