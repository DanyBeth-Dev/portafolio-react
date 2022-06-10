import React, { useState } from 'react';
import i18n from '../i18n';
import { useTranslation } from 'react-i18next';
import { FaBars, FaTimes, FaGithub, FaLinkedin, FaFacebook, FaLinkedinIn } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import Logo from '../assets/logo-personal.png';
import { Link } from 'react-scroll';

const Footer = () => {
  const { t, i18n } = useTranslation();
  return (
    <div className='w-full bg-[#0a192f] flex justify-center items-center p-4'>
      <a className='flex items-center px-4 text-gray-300' href={t('linkedin_url')} target="_blank">
        <FaLinkedin size={30} />
      </a>
      <a className='flex items-center px-4 text-gray-300' href='https://github.com/DanyBeth-Dev/' target="_blank">
        <FaGithub size={30} />
      </a>
      <a className='flex items-center px-4 text-gray-300' href='mailto:daniebeth.dev@gmail.com' target="_blank">
        <HiOutlineMail size={30} />
      </a>
      <a className='flex items-center px-4 text-gray-300' href={t('resume_url')} target="_blank">
        <BsFillPersonLinesFill size={30} />
      </a>
    </div>
  )
}

export default Footer