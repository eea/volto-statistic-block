import iconSVG from '@plone/volto/icons/special-character.svg';
import StatisticBlockEdit from './Edit';
import StatisticBlockView from './View';
import editSchema from './schema';

export default (config) => {
  config.blocks.blocksConfig.statistic_block = {
    id: 'statistic_block',
    title: 'Statistic',
    icon: iconSVG,
    group: 'text',
    view: StatisticBlockView,
    edit: StatisticBlockEdit,
    restricted: false,
    mostUsed: false,
    sidebarTab: 1,
    security: {
      addPermission: [],
      view: [],
    },
    editSchema,
  };
  config.settings.blocksWithFootnotesSupport = {
    ...(config.settings.blocksWithFootnotesSupport || {}),
    statistic_block: [
      { items: 'info' },
      { items: 'value' },
      { items: 'label' },
    ],
  };
  return config;
};
