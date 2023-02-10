import React from 'react'
import styles from '../style';
import {arrowUp} from '../assets';
const GetStarted = () => (
  <div className={`${styles.flexCenter} w-[140px] 
  h-[140px] rounded-full p-[2px]
  bg-gradient-to-r from-blue-500 to-blue-700 hover:to-blue-500 hover:from-blue-300  cursor-pointer`}>
    <div className={`${styles.flexCenter}
    flex-col bg-primary w-[100%] 
    h-[100%] rounded-full`
    }>
      <div className={`${styles.flexStart} flex-row`}>
        <p className="font-poppins font-medium mr-2
        text-[18px] leading-[23px]">
          <span className="text-gradient">
            Get
          </span>
        </p>
        <img src={arrowUp} alt="arrow"
        className="w-[23px] h-[23px] object-contain"
        />
      </div>
      <p className="font-poppins font-medium text-[18px] leading-[23px]">
          <span className="text-gradient">
            Started
          </span> 
      </p>
      
    </div>
    <div>

    </div>
  </div>
)

export default GetStarted