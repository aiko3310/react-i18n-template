import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
const Header = () => {
  const { t, i18n } = useTranslation('translation');
  const [lang, setLang] = useState('en');
  useEffect(() => {
    if (lang !== null) i18n.changeLanguage(lang);
  }, [i18n, lang]);
  const handleLang = (e) => {
    setLang(e.target.value);
  };
  return (
    <div>
      <select value={lang} onChange={handleLang}>
        <option value={'en'}>en</option>
        <option value={'tw'}>tw</option>
        <option value={'cn'}>cn</option>
      </select>
      <p>{t('title')}</p>
    </div>
  );
};

export default Header;
