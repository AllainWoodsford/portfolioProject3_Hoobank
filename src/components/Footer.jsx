import React from 'react'
import styles from '../style';
import {logo} from '../assets';
import {footerLinks, socialMedia} from '../constants';

const currentYear = new Date().getFullYear();

const LinkGroup = ({title,links}) =>(
  <div className="flex-col flex align-center justify-evenly flex-1  text-left mx-5 ss:my-0 my-4 min-w-[150px]">
      <h4 className={`font-poppins text-white font-medium text-[18px] leading-[27px]`}>{title}</h4>
      <ul className="list-none mt-4">
      {links.map((l,index)=>(
        <li key={index+l.name} className={`text-[16px] leading-[24px] font-poppins
        font-normal text-dimWhite ${index !== links.length-1 ? 'mb-4' : 'mb-0'} hover:text-secondary`}>
          <a href={l.link}>{l.name}</a>
        </li>
      ))}
      </ul>
  </div>
);

const Footer = () => (
  <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
    <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full `}>
      <div className='flex-col flex flex-1 justify-start mr-10'>
        <img src={logo} alt="logo" className="w-[266px] h-[72px] object-contain"/>
        <p className={`${styles.paragraph} mt-4 max-w-[310px]`}>A new way to make the payments easy, reliable and secure.</p>
      </div>
      <div className="flex-[1.5] w-full justify-between align-center flex-row flex  flex-wrap md:mt-0 mt-10">
        {footerLinks.map((linksGroup,index) => (
         <LinkGroup key={index+linksGroup.title} title={linksGroup.title} links={linksGroup.links}/>
        ))}
      </div>
    </div>
    <div className="h-[1px] w-[100%] bg-[#3F3E45]" />
    <div className=" w-full  flex flex-1 justify-between items-center md:flex-row flex-col pt-6   mt-5 ">
      <p className="font-poppins text-dimWhite font-normal text-center text-[18px] leading-[27px]">Copyright © {currentYear} HooBank. All Rights Reserved.</p>
  
      <div className="flex-row flex md:mt-0 mt-6">
        {socialMedia.map((social,index) => (
          <img 
          key={social.id} 
          src={social.icon} 
          alt={social.id}
          className={`w-[21px] cursor-pointer h-[21px]  ${index !== social.length -1 ? 'mr-6' : 'mr-0'} ease-out hover:ease-in hover:w-[23px] hover:h-[23px]`}/>
        ))}
      </div>
    </div>
  </section>
)

export default Footer