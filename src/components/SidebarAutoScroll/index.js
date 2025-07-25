import { useEffect } from 'react';
import { useLocation } from '@docusaurus/router';

export default function SidebarAutoScroll() {
  const location = useLocation();

  useEffect(() => {
    const scrollToActive = () => {
      setTimeout(() => {
        const activeLink = document.querySelector('.menu__link--active');
        
        if (activeLink) {
          activeLink.scrollIntoView({
            behavior: 'smooth',
            block: 'center',
            inline: 'nearest'
          });
        }
      }, 200);
    };

    scrollToActive();
  }, [location.pathname]);

  return null;
}