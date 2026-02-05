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

    // Wait for all Mermaid containers to have rendered SVGs
    const observer = new MutationObserver(() => {
      const containers = document.querySelectorAll('.docusaurus-mermaid-container');
      if (containers.length === 0) return;

      const allRendered = [...containers].every(c => c.querySelector('svg'));
      if (allRendered) {
        observer.disconnect();
        // Wait for SVGs to reach final dimensions
        setTimeout(() => scrollToHash(), 300);
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