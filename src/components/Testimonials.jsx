import React from 'react'
import {card} from '../assets';
import {feedback} from '../constants';
import FeedbackCard from './FeedbackCard';
import styles,{layout} from '../style';
import Button from './Button';

const Testimonials = () => (
  <section id="clients" className={`${styles.paddingY} flex-col relative`}>
    <div />
    <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
      <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient"/>
      <h2 className={styles.heading2}>What people are saying <br className="sm:block hidden"/> about us</h2>
      
      <div className="w-full md:mt-0 mt-6">
        <p className={`${styles.paragraph} text-left max-w-[450px]`}>Everything you need to accept card payments and grow your business anywhere on the planet.</p>
      </div>
    </div>
    <div className="flex flex-wrap sm:justify-start justify-center w-full feedback-container relative z-[1]">
      {feedback.map((card) => (
        <FeedbackCard key={card.id} {...card}/>
      ))}

    </div>
  </section>
)

export default Testimonials