import { useEffect } from 'react';
import { useLocation } from '@docusaurus/router';

export default function SidebarAutoScroll() {
  const location = useLocation();

  useEffect(() => {
    const activeLink = document.querySelector('.menu__link--active');
    const sidebarContainer = activeLink?.closest('.theme-doc-sidebar-container');
    
    if (activeLink && sidebarContainer) {
      // Position item at top, then immediately scroll to center
      activeLink.scrollIntoView({ behavior: 'smooth', block: 'start' });
      
      const centerOffset = sidebarContainer.getBoundingClientRect().height / 2 - 30;
      sidebarContainer.scrollBy({ 
        top: -centerOffset, 
        behavior: 'smooth' 
      });
    }
  }, [location.pathname]);

  return null;
}