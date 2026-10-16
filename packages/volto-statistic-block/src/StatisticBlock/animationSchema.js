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
});

const schema = (intl) => {
  return {
    fieldsets: [
      {
        id: 'default',
        title: intl.formatMessage(messages.Default),
        fields: ['enabled', 'duration', 'decimals'],
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
    },

    required: [],
  };
};

export default schema;
