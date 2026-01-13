import React, { useState } from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import { translate } from "@docusaurus/Translate";
import { useVisibleBlogSidebarItems } from "@docusaurus/theme-common/internal";
import styles from "./styles.module.css";
import Modal from "@site/src/components/modal";
export default function BlogSidebarDesktop({ sidebar }) {
  const [newsletterModalVisible, setNewsletterModal] = useState(false);
  const items = useVisibleBlogSidebarItems(sidebar.items);

  return (
    <aside className="col col--3">
      <nav
        className={clsx(styles.sidebar, "thin-scrollbar")}
        aria-label={translate({
          id: "theme.blog.sidebar.navAriaLabel",
          message: "Blog recent posts navigation",
          description: "The ARIA label for recent posts in the blog sidebar",
        })}
      >
        <div className={clsx(styles.sidebarItemTitle, "margin-bottom--md")}>
          {"Subscribe"}
        </div>

        <ul className={clsx(styles.sidebarItemList, "clean-list")}>
          <li className={styles.sidebarItem}>
            <Link
              to={"#"}
              onClick={() => setNewsletterModal(true)}
              className={styles.sidebarItemLink}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style={{
                  verticalAlign: "middle",
                  marginRight: 6,
                  position: "relative",
                  top: -2,
                }}
              >
                <path
                  d="M15 5.5C15 7.98528 12.9853 10 10.5 10C8.01472 10 6 7.98528 6 5.5C6 3.01472 8.01472 1 10.5 1C12.9853 1 15 3.01472 15 5.5ZM11 3.5C11 3.22386 10.7761 3 10.5 3C10.2239 3 10 3.22386 10 3.5V5H8.5C8.22386 5 8 5.22386 8 5.5C8 5.77614 8.22386 6 8.5 6H10V7.5C10 7.77614 10.2239 8 10.5 8C10.7761 8 11 7.77614 11 7.5V6H12.5C12.7761 6 13 5.77614 13 5.5C13 5.22386 12.7761 5 12.5 5H11V3.5ZM12 13V10.793C12.3486 10.6944 12.6832 10.5622 13 10.4003V13C13 14.1046 12.1046 15 11 15H3C1.89543 15 1 14.1046 1 13V7C1 5.89543 1.89543 5 3 5H5.02242C5.00758 5.16468 5 5.33146 5 5.5C5 5.66854 5.00758 5.83532 5.02242 6H3C2.44772 6 2 6.44772 2 7V7.73976L7.0001 10.4321L7.54428 10.1391C7.88809 10.3586 8.25794 10.541 8.64816 10.6805L7.23715 11.4402C7.08916 11.5199 6.91104 11.5199 6.76305 11.4402L2 8.87552V13C2 13.5523 2.44772 14 3 14H11C11.5523 14 12 13.5523 12 13Z"
                  fill="currentColor"
                />
              </svg>

              {"Email"}
            </Link>
          </li>
          <li key={"/changelog/rss.xml"} className={styles.sidebarItem}>
            <Link
              isNavLink
              to={"https://docs.swan.io/changelog/rss.xml"}
              className={styles.sidebarItemLink}
              activeClassName={styles.sidebarItemLinkActive}
            >
              <svg
                width="20"
                height="20"
                fill="none"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                style={{
                  verticalAlign: "middle",
                  marginRight: 6,
                  position: "relative",
                  top: -2,
                }}
              >
                <path
                  d="M6.75 7.5c-.405 0-.75-.317-.75-.722v-.055c0-.393.305-.721.698-.723h.052C12.963 6 18 11.037 18 17.25v.052a.711.711 0 0 1-.723.698h-.055c-.405 0-.722-.345-.722-.75 0-5.385-4.365-9.75-9.75-9.75ZM13.294 18c.38 0 .701-.287.705-.666L14 17.25A7.25 7.25 0 0 0 6.666 10c-.379.005-.666.327-.666.706v.09c0 .399.351.704.75.704a5.75 5.75 0 0 1 5.75 5.75c0 .399.305.75.704.75h.09ZM9 16.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM6.25 3A3.25 3.25 0 0 0 3 6.25v11.5A3.25 3.25 0 0 0 6.25 21h11.5A3.25 3.25 0 0 0 21 17.75V6.25A3.25 3.25 0 0 0 17.75 3H6.25ZM4.5 6.25c0-.966.784-1.75 1.75-1.75h11.5c.966 0 1.75.784 1.75 1.75v11.5a1.75 1.75 0 0 1-1.75 1.75H6.25a1.75 1.75 0 0 1-1.75-1.75V6.25Z"
                  fill="currentColor"
                />
              </svg>
              {"RSS"}
            </Link>
          </li>
          <li key={"/changelog/atom.xml"} className={styles.sidebarItem}>
            <Link
              isNavLink
              to={"https://docs.swan.io/changelog/atom.xml"}
              className={styles.sidebarItemLink}
              activeClassName={styles.sidebarItemLinkActive}
            >
              <svg
                width="20"
                height="20"
                fill="none"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                style={{
                  verticalAlign: "middle",
                  marginRight: 6,
                  position: "relative",
                  top: -2,
                }}
              >
                <path
                  d="M6.75 7.5c-.405 0-.75-.317-.75-.722v-.055c0-.393.305-.721.698-.723h.052C12.963 6 18 11.037 18 17.25v.052a.711.711 0 0 1-.723.698h-.055c-.405 0-.722-.345-.722-.75 0-5.385-4.365-9.75-9.75-9.75ZM13.294 18c.38 0 .701-.287.705-.666L14 17.25A7.25 7.25 0 0 0 6.666 10c-.379.005-.666.327-.666.706v.09c0 .399.351.704.75.704a5.75 5.75 0 0 1 5.75 5.75c0 .399.305.75.704.75h.09ZM9 16.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM6.25 3A3.25 3.25 0 0 0 3 6.25v11.5A3.25 3.25 0 0 0 6.25 21h11.5A3.25 3.25 0 0 0 21 17.75V6.25A3.25 3.25 0 0 0 17.75 3H6.25ZM4.5 6.25c0-.966.784-1.75 1.75-1.75h11.5c.966 0 1.75.784 1.75 1.75v11.5a1.75 1.75 0 0 1-1.75 1.75H6.25a1.75 1.75 0 0 1-1.75-1.75V6.25Z"
                  fill="currentColor"
                />
              </svg>
              {"Atom"}
            </Link>
          </li>
        </ul>
        <Link to="/changelog" style={{ color: "inherit" }}>
          <div className={clsx(styles.sidebarItemTitle, "margin-bottom--md")}>
            {sidebar.title}
          </div>
        </Link>
        <ul className={clsx(styles.sidebarItemList, "clean-list")}>
          {items.map((item) => (
            <li key={item.permalink} className={styles.sidebarItem}>
              <Link
                isNavLink
                to={item.permalink}
                className={styles.sidebarItemLink}
                activeClassName={styles.sidebarItemLinkActive}
              >
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <Modal
        isOpen={newsletterModalVisible}
        onClose={() => setNewsletterModal(false)}
      >
        <svg
          width="42"
          height="42"
          viewBox="0 0 42 42"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M40.25 11.375C40.25 6.05926 35.9407 1.75 30.625 1.75C25.3093 1.75 21 6.05926 21 11.375C21 16.6907 25.3093 21 30.625 21C35.9407 21 40.25 16.6907 40.25 11.375ZM31.5011 12.25L31.5019 16.6312C31.5019 17.1144 31.1102 17.5062 30.6269 17.5062C30.1437 17.5062 29.7519 17.1144 29.7519 16.6312L29.7511 12.25H25.3673C24.8845 12.25 24.4932 11.8583 24.4932 11.375C24.4932 10.8918 24.8845 10.5 25.3673 10.5H29.7508L29.75 6.12372C29.75 5.64047 30.1418 5.24872 30.625 5.24872C31.1082 5.24872 31.5 5.64047 31.5 6.12372L31.5008 10.5H35.869C36.3518 10.5 36.7432 10.8918 36.7432 11.375C36.7432 11.8583 36.3518 12.25 35.869 12.25H31.5011ZM35.875 29.3125V21.4686C36.8393 20.9661 37.7225 20.3293 38.5 19.5832V29.3125C38.5 32.3453 36.1262 34.8237 33.1352 34.991L32.8125 35H9.1875C6.15469 35 3.67632 32.6262 3.509 29.6352L3.5 29.3125V12.6875C3.5 9.6547 5.8738 7.17632 8.86476 7.009L9.1875 7H20.1218C19.7757 7.8298 19.5252 8.70938 19.3838 9.625H9.1875C7.5807 9.625 6.26291 10.8624 6.13515 12.4363L6.125 12.6875V13.4382L21 21.2668L23.2841 20.0645C24.0515 20.7134 24.906 21.2626 25.8277 21.6919L21.6113 23.9115C21.2833 24.0841 20.9005 24.1087 20.5568 23.9854L20.3887 23.9115L6.125 16.4045V29.3125C6.125 30.9193 7.36244 32.2371 8.93633 32.3648L9.1875 32.375H32.8125C34.4193 32.375 35.7371 31.1376 35.8648 29.5637L35.875 29.3125Z"
            fill="#6240B5"
          />
        </svg>

        <h3>Subscribe to the Swan Changelog</h3>
        <iframe
          data-w-type="embedded"
          frameBorder="0"
          scrolling="no"
          marginHeight="0"
          marginWidth="0"
          src="https://xr22w.mjt.lu/wgt/xr22w/0oqk/form?c=ce289285"
          width="100%"
          style={{ height: "480px" }}
        ></iframe>
      </Modal>
      <script
        type="text/javascript"
        src="https://app.mailjet.com/pas-nc-embedded-v1.js"
      ></script>
    </aside>
  );
}
