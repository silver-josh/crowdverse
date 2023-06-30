import React, { useEffect, useRef } from 'react';
import { feedback } from "../constants";
import styles from "../style";
import FeedbackCard from "./FeedbackCard";

const Testimonials = () => {
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
    <section id="clients" className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`} ref={sectionRef}>
      <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient bottom-40" />

      <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
        <h2 className={styles.heading2}>
          Crowdfunding <br className="sm:block hidden" /> in Three Simple Steps
        </h2>
        <div className="w-full md:mt-0 mt-6">
          <p className={`${styles.paragraph} text-left max-w-[450px]`}>
            Empower Your Crowdfunding Journey with Crowdverse: Connect, Set Goals, Engage, and Secure Funding Hassle-Free.
          </p>
        </div>
      </div>

      <div className="flex flex-wrap sm:flex-nowrap sm:justify-start justify-center w-full feedback-container relative z-[1]">
        {feedback.map((card) => <FeedbackCard key={card.id} {...card} />)}
      </div>
    </section>
  );
};

export default Testimonials;
