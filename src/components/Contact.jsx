import React from 'react';
import i18n from '../i18n';
import { useTranslation } from 'react-i18next';

const Contact = () => {
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
    <div name='contact' className='w-full h-screen bg-[#0a192f] flex justify-center items-center p-4'>
        <form method='POST' action="https://getform.io/f/43656672-7057-4a6d-b79a-cee078b05693" className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300'>{t('contact')}</p>
                <p className='text-gray-300 py-4'>{t('contact_description')}</p>
            </div>
            <input className='bg-[#ccd6f6] p-2' type="text" placeholder={t('form_name')} name='name' />
            <input className='my-4 p-2 bg-[#ccd6f6]' type="email" placeholder={t('form_email')} name='email' />
            <textarea className='bg-[#ccd6f6] p-2' name="message" rows="10" placeholder={t('form_message')}></textarea>
            <button className='text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center'>{t('contact_submit')}</button>
        </form>
    </div>
  )
}

export default Contact
