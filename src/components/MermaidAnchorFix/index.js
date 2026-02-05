import { useEffect } from 'react';
import { useLocation } from '@docusaurus/router';

export default function MermaidAnchorFix() {
  const { hash } = useLocation();

  useEffect(() => {
    if (!hash) return;

    const scrollToHash = () => {
      const el = document.querySelector(hash);
      if (el) el.scrollIntoView();
    };

    const waitForStableLayout = () => {
      let lastHeight = document.body.scrollHeight;
      let stableCount = 0;

      const interval = setInterval(() => {
        const currentHeight = document.body.scrollHeight;
        if (currentHeight === lastHeight) {
          stableCount++;
          // Height unchanged for 3 consecutive checks (300ms of stability)
          if (stableCount >= 3) {
            clearInterval(interval);
            scrollToHash();
          }
        } else {
          stableCount = 0;
          lastHeight = currentHeight;
        }
      }, 100);

      // Safety net
      setTimeout(() => clearInterval(interval), 10000);
    };

    const observer = new MutationObserver(() => {
      const containers = document.querySelectorAll('.docusaurus-mermaid-container');
      if (containers.length === 0) return;

      const allRendered = [...containers].every(c => c.querySelector('svg'));
      if (allRendered) {
        observer.disconnect();
        waitForStableLayout();
      }
    });

    observer.observe(document.body, { childList: true, subtree: true });

    const timeout = setTimeout(() => observer.disconnect(), 5000);
    return () => {
      observer.disconnect();
      clearTimeout(timeout);
    };
  }, [hash]);

  return null;
}