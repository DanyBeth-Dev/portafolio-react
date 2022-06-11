import React from 'react';
import i18n from '../i18n';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-scroll';
import FotoPerfil from '../assets/perfil.png'

const Home = () => {
  const { t, i18n } = useTranslation();
  return (
    <div name='home' className='w-full h-screen bg-[#0a192f]'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <img src={FotoPerfil} alt="Foto de perfil" className='max-w-[180px]' />
        <p className='text-pink-600'>{t("greeting")}</p>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>
          Daniela Hernández
        </h1>
        <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>{t("title")}</h2>
        <p className='text-[#8892b0] py-4 max-w-[700px]'>{t("description")}</p>
        <div>
          <Link to='about' smooth={true} duration={500}>
            <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600'>
            {t('button_one')}
            <span className='group-hover:rotate-90 duration-300'>
              <HiArrowNarrowRight className='ml-3 ' />
            </span>
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
