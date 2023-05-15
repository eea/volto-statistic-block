import { defineMessages } from 'react-intl';

const messages = defineMessages({
  Default: {
    id: 'Default',
    defaultMessage: 'Default',
  },
  Align: {
    id: 'Align',
    defaultMessage: 'Align',
  },
  BackgroundWhenInverted: {
    id: 'Background when inverted',
    defaultMessage: 'Background when inverted',
  },
  Primary: {
    id: 'Primary',
    defaultMessage: 'Primary',
  },
  Secondary: {
    id: 'Secondary',
    defaultMessage: 'Secondary',
  },
  Tertiary: {
    id: 'Tertiary',
    defaultMessage: 'Tertiary',
  },
});

export default () => {
  return {
    fieldsets: [
      {
        id: 'default',
        title: intl.formatMessage(messages.Default),
        fields: [
          'align',
          'textAlign',
          'backgroundInverted',
          'valueVariation',
          'labelVariation',
          'extraVariation',
        ],
      },
    ],

    properties: {
      align: {
        widget: 'align',
        title: intl.formatMessage(messages.Align),
        actions: ['center', 'wide', 'full'],
      },
      textAlign: {
        title: 'Text align',
        widget: 'style_text_align',
        default: 'center',
      },
      backgroundInverted: {
        title: intl.formatMessage(messages.BackgroundWhenInverted),
        choices: [
          ['primary', intl.formatMessage(messages.Primary)],
          ['secondary', intl.formatMessage(messages.Secondary)],
          ['tertiary', intl.formatMessage(messages.Tertiary)],
        ],
        defaultValue: 'primary',
      },
      valueVariation: {
        title: 'Value variation',
        choices: [
          ['primary', intl.formatMessage(messages.Primary)],
          ['secondary', intl.formatMessage(messages.Secondary)],
          ['tertiary', intl.formatMessage(messages.Tertiary)],
        ],
        defaultValue: 'secondary',
      },
      labelVariation: {
        title: 'Label variation',
        choices: [
          ['primary', intl.formatMessage(messages.Primary)],
          ['secondary', intl.formatMessage(messages.Secondary)],
          ['tertiary', intl.formatMessage(messages.Tertiary)],
        ],
        defaultValue: 'tertiary',
      },
      extraVariation: {
        title: 'Extra info variation',
        choices: [
          ['primary', intl.formatMessage(messages.Primary)],
          ['secondary', intl.formatMessage(messages.Secondary)],
          ['tertiary', intl.formatMessage(messages.Tertiary)],
        ],
        defaultValue: 'tertiary',
      },
    },

    required: [],
  };
};
