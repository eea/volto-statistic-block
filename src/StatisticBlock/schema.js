import animationSchema from './animationSchema';
import stylesSchema from './stylesSchema';

const statisticSchema = {
  title: 'Statistic item',
  fieldsets: [
    {
      id: 'default',
      title: 'Default',
      fields: ['value', 'label', 'info', 'href'],
    },
  ],
  properties: {
    value: {
      title: 'Value',
    },
    label: {
      title: 'Label',
    },
    info: {
      title: 'Extra info',
      widget: 'slate_richtext',
    },
    href: {
      title: 'Link',
      widget: 'url',
    },
  },
  required: [],
};

export default {
  title: 'Statistic block',

  fieldsets: [
    {
      id: 'default',
      title: 'Default',
      fields: ['horizontal', 'inverted', 'size', 'widths', 'items'],
    },
    {
      id: 'animation',
      title: 'Animation',
      fields: ['animation'],
    },
    {
      id: 'styling',
      title: 'Styling',
      fields: ['styles'],
    },
  ],

  properties: {
    horizontal: {
      title: 'Horizontal',
      description: 'Can present its measurement horizontally',
      type: 'boolean',
    },
    inverted: {
      title: 'Inverted',
      description: 'Can be formatted to fit on a dark background.',
      type: 'boolean',
    },
    size: {
      title: 'Size',
      choices: [
        ['mini', 'Mini'],
        ['tiny', 'Tiny'],
        ['small', 'Small'],
        ['large', 'Large'],
        ['huge', 'Huge'],
      ],
    },
    widths: {
      title: 'Columns',
      choices: [
        ['one', 'One'],
        ['two', 'Two'],
        ['three', 'Three'],
        ['four', 'Four'],
      ],
    },
    items: {
      title: 'Statistic items',
      widget: 'object_list',
      schema: statisticSchema,
    },
    animation: {
      widget: 'object',
      title: 'Animation',
      schema: animationSchema(),
    },
    styles: {
      widget: 'object',
      title: 'Styles',
      schema: stylesSchema(),
    },
  },

  required: [],
};
