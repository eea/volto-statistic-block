import installStatisticBlock from './StatisticBlock';

const applyConfig = (config) => {
  return [installStatisticBlock].reduce((acc, apply) => apply(acc), config);
};

export default applyConfig;
