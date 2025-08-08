import { useEffect } from "react";

export default function SidebarAutoScroll() {
  useEffect(() => {
    const activeLinks = document.querySelectorAll(".menu__link--active");
    // Take the last in selection, as every ancestor link is also marked as active
    const deepestActiveLink = activeLinks[activeLinks.length - 1];
    if (deepestActiveLink == null) {
      return;
    }
    const menu = deepestActiveLink.closest(".menu");

    if (menu != null) {
      const activeLinkRect = deepestActiveLink.getBoundingClientRect();
      const menuRect = menu.getBoundingClientRect();
      menu.scrollTop =
        activeLinkRect.top - menuRect.height / 2 - activeLinkRect.height / 2;
    }
  }, []);

  return null;
}
