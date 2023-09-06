import React from 'react'
import styles from './Portfolio.module.scss'
export const Portfolio : React.FC = () => {
  return (
    <div id="portfolio" className={styles.portfolio}>
      <h1>Here is Portfolio</h1>
      <div className={styles.portfolioCard}>
        <div className={styles.portfolioItem}>
          <div className={styles.portfolioItemHeader}>
            <h2>Card Title</h2>
          </div>
          <div className={styles.portfolioItemBody}>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque,
              perspiciatis?
            </p>
            <a
              className={styles.portfolioItemLink}
              href="https://to-do-application-react-js.netlify.app/"
            >
              <button className={styles.portfolioItemBtn}>Go someone</button>
            </a>
          </div>
        </div>
        <div className={styles.portfolioItem}>
          <div className={styles.portfolioItemHeader}>
            <h2>Card Title</h2>
          </div>
          <div className={styles.portfolioItemBody}>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque,
              perspiciatis?
            </p>
            <a
              className={styles.portfolioItemLink}
              href="https://to-do-application-react-js.netlify.app/"
            >
              <button className={styles.portfolioItemBtn}>Go someone</button>
            </a>
          </div>
        </div>
        <div className={styles.portfolioItem}>
          <div className={styles.portfolioItemHeader}>
            <h2>Card Title</h2>
          </div>
          <div className={styles.portfolioItemBody}>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque,
              perspiciatis?
            </p>
            <a
              className={styles.portfolioItemLink}
              href="https://to-do-application-react-js.netlify.app/"
            >
              <button className={styles.portfolioItemBtn}>Go someone</button>
            </a>
          </div>
        </div>
      </div>
      <div className={styles.portfolioCard}>
        <div className={styles.portfolioItem}>
          <div className={styles.portfolioItemHeader}>
            <h2>Card Title</h2>
          </div>
          <div className={styles.portfolioItemBody}>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque,
              perspiciatis?
            </p>
            <a
              className={styles.portfolioItemLink}
              href="https://to-do-application-react-js.netlify.app/"
            >
              <button className={styles.portfolioItemBtn}>Go someone</button>
            </a>
          </div>
        </div>
        <div className={styles.portfolioItem}>
          <div className={styles.portfolioItemHeader}>
            <h2>Card Title</h2>
          </div>
          <div className={styles.portfolioItemBody}>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque,
              perspiciatis?
            </p>
            <a
              className={styles.portfolioItemLink}
              href="https://to-do-application-react-js.netlify.app/"
            >
              <button className={styles.portfolioItemBtn}>Go someone</button>
            </a>
          </div>
        </div>
        <div className={styles.portfolioItem}>
          <div className={styles.portfolioItemHeader}>
            <h2>Card Title</h2>
          </div>
          <div className={styles.portfolioItemBody}>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque,
              perspiciatis?
            </p>
            <a
              className={styles.portfolioItemLink}
              href="https://to-do-application-react-js.netlify.app/"
            >
              <button className={styles.portfolioItemBtn}>Go someone</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
