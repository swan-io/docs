import * as React from "react";
import styles from "./styles.module.css";

void React;

const FeatureList = [
  {
    title: "Documentation",
    url: "/welcome",
    svg: (
      <svg
        width="24"
        height="24"
        fill="none"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        className={styles.svg}
      >
        <path
          d="M7 6a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1V6Zm1.5 1.5h7v-1h-7v1Z"
          fill="#6240B5"
        />
        <path
          d="M4 4.5A2.5 2.5 0 0 1 6.5 2H18a2.5 2.5 0 0 1 2.5 2.5v14.25a.75.75 0 0 1-.75.75H5.5a1 1 0 0 0 1 1h13.25a.75.75 0 0 1 0 1.5H6.5A2.5 2.5 0 0 1 4 19.5v-15ZM5.5 18H19V4.5a1 1 0 0 0-1-1H6.5a1 1 0 0 0-1 1V18Z"
          fill="#6240B5"
        />
      </svg>
    ),
    description: (
      <>
        Discover the features that power Swan. Unlock your integration’s
        full potential with Swan’s comprehensive documentation.
      </>
    ),
  },
  {
    title: "Partnership",
    url: "/partnership",
    svg: (
      <svg
        className={styles.svg}
        width="24"
        height="24"
        fill="none"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12.24 2.964a.748.748 0 0 0-.58.276l-.058.043a6.295 6.295 0 0 0-6.266 1.553 6.195 6.195 0 0 0-1.736 5.51l-.015.015-.958.951a2.108 2.108 0 0 0 0 2.995 2.136 2.136 0 0 0 1.793.601 2.129 2.129 0 0 0 1.883 1.558 2.13 2.13 0 0 0 2.017 1.942c.026.507.233 1.005.622 1.391.76.756 1.952.821 2.787.197l.387.384a2.151 2.151 0 0 0 3.028 0c.37-.368.577-.838.62-1.318a2.128 2.128 0 0 0 1.94-1.932 2.128 2.128 0 0 0 1.87-1.604 2.136 2.136 0 0 0 1.76-.606 2.108 2.108 0 0 0 0-2.994l-.833-.829.172-.666a5.952 5.952 0 0 0-.525-4.303 6.02 6.02 0 0 0-5.303-3.16h-1.607a4.251 4.251 0 0 0-.206-.004h-.791Zm2.925 4.945 3.464 3.442.003.004.014.013 1.625 1.615a.62.62 0 0 1 0 .88.63.63 0 0 1-.886 0l-1.625-1.615a.756.756 0 0 0-1.064 0l-.016.017a.744.744 0 0 0 0 1.057l1.266 1.259a.62.62 0 0 1 0 .88.63.63 0 0 1-.819.06.756.756 0 0 0-.987.07.744.744 0 0 0-.062.982.62.62 0 0 1-.055.819.63.63 0 0 1-.83.05.756.756 0 0 0-.995.057.744.744 0 0 0-.064.989.63.63 0 0 1-.054.834.64.64 0 0 1-.9 0l-.372-.369.105-.105a2.108 2.108 0 0 0 0-2.994 2.13 2.13 0 0 0-1.4-.618 2.129 2.129 0 0 0-1.954-2.004 2.104 2.104 0 0 0-.617-1.324 2.136 2.136 0 0 0-1.793-.601 2.133 2.133 0 0 0-2.118-1.565A4.705 4.705 0 0 1 6.4 5.892a4.767 4.767 0 0 1 3.581-1.38L8.484 5.645a2.314 2.314 0 0 0-.44 3.253 2.333 2.333 0 0 0 3.258.441l1.889-1.431h1.974ZM9.389 6.842l3.139-2.378h.504a2.752 2.752 0 0 1 .187.005h1.626a4.52 4.52 0 0 1 3.982 2.37c.495.92.65 1.978.444 2.995L16.06 6.638a.75.75 0 0 0-.539-.229h-2.581a.75.75 0 0 0-.453.152l-2.09 1.583a.833.833 0 0 1-1.162-.157.814.814 0 0 1 .155-1.145Zm-3.354 7.955a.62.62 0 0 1 0-.88l.957-.952a.63.63 0 0 1 .886 0 .62.62 0 0 1 .008.872l-.008.008-.957.951-.009.009a.63.63 0 0 1-.877-.008Zm-.491-3.369a.618.618 0 0 1-.01.87l-.957.952a.63.63 0 0 1-.886 0 .62.62 0 0 1 0-.88l.958-.951a.63.63 0 0 1 .886 0l.009.009Zm5.348 7.314a.63.63 0 0 1-.886 0 .62.62 0 0 1 0-.88l.957-.951a.63.63 0 0 1 .886 0 .62.62 0 0 1 0 .88l-.957.951Zm-2.021-2.008a.629.629 0 0 1-.886 0 .62.62 0 0 1-.009-.872l.009-.008.957-.951.008-.009a.63.63 0 0 1 .878.009.62.62 0 0 1 0 .88l-.957.951Z"
          fill="#6240B5"
        />
      </svg>
    ),
    description: (
      <>
        Discover what it means to partner with Swan. Learn where Swan operates
        and review your responsibilities to foster a successful partnership.
      </>
    ),
  },
  {
    title: "Developers",
    url: "/developers",
    svg: (
      <svg
        className={styles.svg}
        width="24"
        height="24"
        fill="none"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="m8.066 18.943 6.5-14.5a.75.75 0 0 1 1.404.518l-.036.096-6.5 14.5a.75.75 0 0 1-1.404-.518l.036-.096 6.5-14.5-6.5 14.5ZM2.22 11.47l4.25-4.25a.75.75 0 0 1 1.133.976l-.073.085L3.81 12l3.72 3.719a.75.75 0 0 1-.976 1.133l-.084-.073-4.25-4.25a.75.75 0 0 1-.073-.976l.073-.084 4.25-4.25-4.25 4.25Zm14.25-4.25a.75.75 0 0 1 .976-.073l.084.073 4.25 4.25a.75.75 0 0 1 .073.976l-.073.085-4.25 4.25a.75.75 0 0 1-1.133-.977l.073-.084L20.19 12l-3.72-3.72a.75.75 0 0 1 0-1.06Z"
          fill="#6240B5"
        />
      </svg>
    ),
    description: (
      <>
        Embrace the elegance of Swan's GraphQL API. Explore the tools available
        to help you develop your integration seamlessly.
      </>
    ),
  },
];

function Feature({ svg, url, title, description, index }) {
  return (
    <a
      href={url}
      className={`${styles.featureBlock}`}
      style={{ animationDelay: `${200 + index * 100}ms` }}
    >
      <div className={styles.svgContainer}>{svg}</div>
      <div className="text--center padding-horiz--md" style={{ flexGrow: 1 }}>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      <svg
        width="24"
        height="24"
        fill="none"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M13.704 4.284a1 1 0 1 0-1.403 1.424L17.67 11H4a1 1 0 1 0 0 2h13.665L12.3 18.285a1 1 0 0 0 1.403 1.424l6.925-6.822a1.25 1.25 0 0 0 0-1.78l-6.925-6.823Z"
          fill="#212121"
          opacity={0.4}
        />
      </svg>
    </a>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className={styles.featuresRows}>
          {FeatureList.map((props, idx) => (
            <>
              {idx > 0 ? (
                <div style={{ width: 8, height: 8, flexShrink: 0 }} />
              ) : null}
              <Feature key={idx} index={idx} {...props} />
            </>
          ))}
        </div>
      </div>
    </section>
  );
}
