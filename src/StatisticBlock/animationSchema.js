import { defineMessages } from 'react-intl';

const messages = defineMessages({
  Default: {
    id: 'Default',
    defaultMessage: 'Default',
  },
  EnableAnimation: {
    id: 'Enable animation',
    defaultMessage: 'Enable animation',
  },
  DurationInSeconds: {
    id: 'Duration (seconds)',
    defaultMessage: 'Duration (seconds)',
  },
  Decimals: {
    id: 'Decimals',
    defaultMessage: 'Decimals',
  },
  Prefix: {
    id: 'Prefix',
    defaultMessage: 'Prefix',
  },
  Suffix: {
    id: 'Suffix',
    defaultMessage: 'Suffix',
  },
});

export default (intl) => {
  return {
    fieldsets: [
      {
        id: 'default',
        title: intl.formatMessage(messages.Default),
        fields: ['enabled', 'duration', 'decimals', 'prefix', 'suffix'],
      },
    ],

    properties: {
      enabled: {
        title: intl.formatMessage(messages.EnableAnimation),
        type: 'boolean',
      },
      duration: {
        title: intl.formatMessage(messages.DurationInSeconds),
        type: 'number',
        minimum: 0,
      },
      decimals: {
        title: intl.formatMessage(messages.Decimals),
        type: 'number',
        minimum: 0,
      },
      prefix: {
        title: intl.formatMessage(messages.Prefix),
      },
      suffix: {
        title: intl.formatMessage(messages.Suffix),
      },
    },

    required: [],
  };
};
