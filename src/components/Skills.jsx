import React from 'react';
import i18n from '../i18n';
import { useTranslation } from 'react-i18next';

import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import JavaScript from '../assets/javascript.png';
import ReactImg from '../assets/react.png';
import Node from '../assets/node.png';
import GitHub from '../assets/github.png';
import Tailwind from '../assets/tailwind.png';
import Sass from '../assets/sass.png'
import Postgresql from '../assets/postgresql.png';
import Mysql from '../assets/mysql.png'
import Bootstrap from '../assets/bootstrap.png';
import Vue from '../assets/vue.png'
import Git from '../assets/git.png'
import Heroku from '../assets/heroku.png'
import Netlify from '../assets/netlify.png'
import Typescript from '../assets/typescript.png'

const Skills = () => {
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
    <div name='skills' className='w-full bg-[#0a192f] text-gray-300'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
          <div>
              <p className='text-4xl font-bold inline border-b-4 border-pink-600 '>{t('skills')}</p>
              <p className='py-4'>{t('skills_description')}</p>
          </div>

          <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={HTML} alt="HTML icon" />
                  <p className='my-4'>HTML</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={CSS} alt="HTML icon" />
                  <p className='my-4'>CSS</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={JavaScript} alt="HTML icon" />
                  <p className='my-4'>JAVASCRIPT</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={ReactImg} alt="HTML icon" />
                  <p className='my-4'>REACT</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='h-20 mx-auto' src={Vue} alt="HTML icon" />
                  <p className='my-4'>VUE</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={Git} alt="HTML icon" />
                  <p className='my-4'>GIT</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={GitHub} alt="HTML icon" />
                  <p className='my-4'>GITHUB</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={Node} alt="HTML icon" />
                  <p className='my-4'>NODE JS</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={Postgresql} alt="HTML icon" />
                  <p className='my-4'>POSTGRESQL</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='h-20 mx-auto' src={Mysql} alt="HTML icon" />
                  <p className='my-4'>MYSQL</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='h-20 mx-auto' src={Heroku} alt="HTML icon" />
                  <p className='my-4'>HEROKU</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='h-20 mx-auto' src={Netlify} alt="HTML icon" />
                  <p className='my-4'>NETLIFY</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={Bootstrap} alt="HTML icon" />
                  <p className='my-4'>BOOTSTRAP</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={Tailwind} alt="HTML icon" />
                  <p className='my-4'>TAILWIND</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='h-20 mx-auto' src={Sass} alt="HTML icon" />
                  <p className='my-4'>SASS</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='h-20 mx-auto' src={Typescript} alt="HTML icon" />
                  <p className='my-4'>TYPESCRIPT</p>
              </div>
          </div>
      </div>
    </div>
  );
};

export default Skills;
