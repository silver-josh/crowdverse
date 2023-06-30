import React, { useEffect, useRef } from 'react';
import { card } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";

const CardDeal = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const [entry] = entries;
      if (entry.isIntersecting) {
        sectionRef.current.classList.add('float-in');
      } else {
        sectionRef.current.classList.remove('float-in');
      }
    });

    observer.observe(sectionRef.current);

    return () => {
      observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <section className={layout.section} ref={sectionRef}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          Unlock Your Funding Potential <br className="sm:block hidden" /> in a Few Simple Clicks!
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Empower Your Crowdfunding Journey: Connect, Set Goals, and Secure Funding with Crowdverse's User-Friendly Platform.
        </p>

        <Button styles={`mt-10`} />
      </div>

      <div className={layout.sectionImg}>
        <img src={card} alt="billing" className="w-[100%] h-[100%]" />
      </div>
    </section>
  );
};

export default CardDeal;
