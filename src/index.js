import installStatisticBlock from './StatisticBlock';

const applyConfig = (config) => {
  config.settings.supportedLanguages = ['ro', 'en'];
  config.settings.defaultLanguage = 'ro';
  return [installStatisticBlock].reduce((acc, apply) => apply(acc), config);
};

export default applyConfig;
