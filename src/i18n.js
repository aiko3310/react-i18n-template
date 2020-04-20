import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

import en from './i18n/en.json';
import tw from './i18n/tw.json';
import cn from './i18n/cn.json';
const resources = {
  en: {
    translation: en,
  },
  tw: {
    translation: tw,
  },
  cn: {
    translation: cn,
  },
};
i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init(
    {
      resources,
      debug: true,
      lng: 'tw', //預設語言
      fallbackLng: 'tw', //如果當前切換的語言沒有對應的翻譯則使用這個語言，
      keySeparator: false,
      react: {
        useSuspense: false,
      },
      interpolation: {
        escapeValue: false,
      },
    },
    (err) => {
      if (err) {
        console.log(err);
      }
    }
  );
// i18n
//   .use(detector) // 偵測瀏覽器語系 好像沒屁用
//   .use(initReactI18next)
//   .init(
//     {
//       resources,
//       debug: false,
//       lng: window.navigator.languages ? window.navigator.languages[0] : 'tw',
//       fallbackLng: 'zh-tw', // 未偵測到時的後備語系
//       interpolation: {
//         escapeValue: false, // not needed for react!!
//       },
//     },
//     (error, t) => {
//       if (error) console.error(error);
//     }
//   );
export default i18n;
