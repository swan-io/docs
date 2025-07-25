import { useEffect } from 'react';
import { useLocation } from '@docusaurus/router';

export default function SidebarAutoScroll() {
  const location = useLocation();

  useEffect(() => {
    const activeLink = document.querySelector('.menu__link--active');
    const sidebarContainer = activeLink?.closest('.theme-doc-sidebar-container');
    
    if (activeLink && sidebarContainer) {
      activeLink.scrollIntoView({ block: 'start' });
      
      const centerOffset = sidebarContainer.getBoundingClientRect().height / 2 - 30;
      sidebarContainer.scrollBy({ top: -centerOffset });
    }
  }, [location.pathname]);

  return null;
}