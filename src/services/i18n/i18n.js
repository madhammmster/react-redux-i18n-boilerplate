import i18n from 'i18next';
import resources from '../../locales'

i18n
    .init({
        fallbackLng: 'pl',
        debug: true,
        returnObjects: true,

        // react i18next special options (optional)
        react: {
            wait: false,
            bindI18n: 'languageChanged loaded',
            bindStore: 'added removed',
            nsMode: 'default'
        },
        resources
    });


export default i18n;