import animationSchema from './animationSchema';
import stylesSchema from './stylesSchema';
import { defineMessages } from 'react-intl';

const messages = defineMessages({
  Statistic: {
    id: 'Statistic',
    defaultMessage: 'Statistic',
  },
  StatisticItem: {
    id: 'Statistic item',
    defaultMessage: 'Statistic item',
  },
  Default: {
    id: 'Default',
    defaultMessage: 'Default',
  },
  Value: {
    id: 'Value',
    defaultMessage: 'Value',
  },
  Label: {
    id: 'Label',
    defaultMessage: 'Label',
  },
  ExtraInfo: {
    id: 'Extra info',
    defaultMessage: 'Extra info',
  },
  Link: {
    id: 'Link',
    defaultMessage: 'Link',
  },
  StatisticBlock: {
    id: 'Statistic block',
    defaultMessage: 'Statistic block',
  },
  Animation: {
    id: 'Animation',
    defaultMessage: 'Animation',
  },
  Styling: {
    id: 'Styling',
    defaultMessage: 'Styling',
  },
  Horizontal: {
    id: 'Horizontal',
    defaultMessage: 'Horizontal',
  },
  CanPresentItsMeasurementHorizontally: {
    id: 'Can present its measurement horizontally',
    defaultMessage: 'Can present its measurement horizontally',
  },
  Inverted: {
    id: 'Inverted',
    defaultMessage: 'Inverted',
  },
  CanBeFormattedDarkBackground: {
    id: 'Can be formatted to fit on a dark background.',
    defaultMessage: 'Can be formatted to fit on a dark background.',
  },
  Size: {
    id: 'Size',
    defaultMessage: 'Size',
  },
  Mini: {
    id: 'Mini',
    defaultMessage: 'Mini',
  },
  Tiny: {
    id: 'Tiny',
    defaultMessage: 'Tiny',
  },
  Small: {
    id: 'Small',
    defaultMessage: 'Small',
  },
  Large: {
    id: 'Large',
    defaultMessage: 'Large',
  },
  Huge: {
    id: 'Huge',
    defaultMessage: 'Huge',
  },
  Columns: {
    id: 'Columns',
    defaultMessage: 'Columns',
  },
  One: {
    id: 'One',
    defaultMessage: 'One',
  },
  Two: {
    id: 'Two',
    defaultMessage: 'Two',
  },
  Three: {
    id: 'Three',
    defaultMessage: 'Three',
  },
  Four: {
    id: 'Four',
    defaultMessage: 'Four',
  },
  StatisticItems: {
    id: 'Statistic items',
    defaultMessage: 'Statistic items',
  },
  Styles: {
    id: 'Styles',
    defaultMessage: 'Styles',
  },
});

const statisticSchema = (intl) => ({
  title: intl.formatMessage(messages.StatisticItem),
  fieldsets: [
    {
      id: 'default',
      title: intl.formatMessage(messages.Default),
      fields: ['value', 'label', 'info', 'href'],
    },
  ],
  properties: {
    value: {
      title: intl.formatMessage(messages.Value),
      widget: 'slate_richtext',
    },
    label: {
      title: intl.formatMessage(messages.Label),
      widget: 'slate_richtext',
    },
    info: {
      title: intl.formatMessage(messages.ExtraInfo),
      widget: 'slate_richtext',
    },
    href: {
      title: intl.formatMessage(messages.Link),
      widget: 'url',
    },
  },
  required: [],
});

const schema = (intl) => ({
  title: intl.formatMessage(messages.StatisticBlock),

  fieldsets: [
    {
      id: 'default',
      title: intl.formatMessage(messages.Default),
      fields: ['horizontal', 'inverted', 'size', 'widths', 'items'],
    },
    {
      id: 'animation',
      title: intl.formatMessage(messages.Animation),
      fields: ['animation'],
    },
    {
      id: 'styling',
      title: intl.formatMessage(messages.Styling),
      fields: ['styles'],
    },
  ],

  properties: {
    horizontal: {
      title: intl.formatMessage(messages.Horizontal),
      description: intl.formatMessage(
        messages.CanPresentItsMeasurementHorizontally,
      ),
      type: 'boolean',
    },
    inverted: {
      title: intl.formatMessage(messages.Inverted),
      description: intl.formatMessage(messages.CanBeFormattedDarkBackground),
      type: 'boolean',
    },
    size: {
      title: intl.formatMessage(messages.Size),
      choices: [
        ['mini', intl.formatMessage(messages.Mini)],
        ['tiny', intl.formatMessage(messages.Tiny)],
        ['small', intl.formatMessage(messages.Small)],
        ['large', intl.formatMessage(messages.Large)],
        ['huge', intl.formatMessage(messages.Huge)],
      ],
    },
    widths: {
      title: intl.formatMessage(messages.Columns),
      choices: [
        ['one', intl.formatMessage(messages.One)],
        ['two', intl.formatMessage(messages.Two)],
        ['three', intl.formatMessage(messages.Three)],
        ['four', intl.formatMessage(messages.Four)],
      ],
    },
    items: {
      title: intl.formatMessage(messages.StatisticItems),
      widget: 'object_list',
      schema: statisticSchema(intl),
    },
    animation: {
      widget: 'object',
      title: intl.formatMessage(messages.Animation),
      schema: animationSchema(intl),
    },
    styles: {
      widget: 'object',
      title: intl.formatMessage(messages.Styles),
      schema: stylesSchema(intl),
    },
  },

  required: [],
});

export default schema;
