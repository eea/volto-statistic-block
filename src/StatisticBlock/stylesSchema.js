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
  TextAlign: {
    id: 'Text align',
    defaultMessage: 'Text align',
  },
  BackgroundWhenInverted: {
    id: 'Background when inverted',
    defaultMessage: 'Background when inverted',
  },
  ValueVariation: {
    id: 'Value variation',
    defaultMessage: 'Value variation',
  },
  LabelVariation: {
    id: 'Label variation',
    defaultMessage: 'Label variation',
  },
  ExtraInfoVariation: {
    id: 'Extra info variation',
    defaultMessage: 'Extra info variation',
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

export default (intl) => {
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
        title: intl.formatMessage(messages.TextAlign),
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
        title: intl.formatMessage(messages.ValueVariation),
        choices: [
          ['primary', intl.formatMessage(messages.Primary)],
          ['secondary', intl.formatMessage(messages.Secondary)],
          ['tertiary', intl.formatMessage(messages.Tertiary)],
        ],
        defaultValue: 'secondary',
      },
      labelVariation: {
        title: intl.formatMessage(messages.LabelVariation),
        choices: [
          ['primary', intl.formatMessage(messages.Primary)],
          ['secondary', intl.formatMessage(messages.Secondary)],
          ['tertiary', intl.formatMessage(messages.Tertiary)],
        ],
        defaultValue: 'tertiary',
      },
      extraVariation: {
        title: intl.formatMessage(messages.ExtraInfoVariation),
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
