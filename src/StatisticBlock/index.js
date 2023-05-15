import iconSVG from '@plone/volto/icons/special-character.svg';
import StatisticBlockEdit from './Edit';
import StatisticBlockView from './View';
import editSchema from './schema';
import { defineMessages } from 'react-intl';

const messages = defineMessages({
  Statistic: {
    id: 'Statistic',
    defaultMessage: 'Statistic',
  },
});

export default (config) => {
  config.blocks.blocksConfig.statistic_block = {
    id: 'statistic_block',
    title: intl.formatMessage(messages.Statistic),
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
  return config;
};
