import React from 'react';
import i18n from '../i18n';
import { useTranslation } from 'react-i18next';

const About = () => {
  const changeLanguage = () => {
    if (t('button_lang') == "Español") {
      return () => {
      i18n.changeLanguage("es");
    }
    } else {
      return () => {
        i18n.changeLanguage("en");
      }
    }
  }
  const { t, i18n } = useTranslation();
  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-pink-600'>
              {t('about')}
            </p>
          </div>
          <div></div>
          </div>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div className='sm:text-right text-4xl font-bold'>
              <p>{t('welcome')}</p>
            </div>
            <div>
              <p>{t('description_two')}</p>  
            </div>
          </div>
      </div>
    </div>
  );
};

export default About;
