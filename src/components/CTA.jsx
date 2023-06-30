import React from 'react';
import styles from "../style";
import Button from "./Button";

const CTA = () => (
  <section className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow float-in`}>
    <div className="flex-1 flex flex-col">
      <h2 className={styles.heading2}>Try Crowdverse Today!</h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Empower Your Crowdfunding Journey: Connect, Set Goals, and Secure Funding with Crowdverse's User-Friendly Platform.
      </p>
    </div>

    <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
      <Button />
    </div>
  </section>
);

export default CTA;
