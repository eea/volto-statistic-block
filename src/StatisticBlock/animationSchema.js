export default () => {
  return {
    fieldsets: [
      {
        id: 'default',
        title: 'Default',
        fields: ['enabled', 'duration', 'decimals', 'prefix', 'suffix'],
      },
    ],

    properties: {
      enabled: {
        title: 'Enable animation',
        type: 'boolean',
      },
      duration: {
        title: 'Duration (seconds)',
        type: 'number',
        minimum: 0,
      },
      decimals: {
        title: 'Decimals',
        type: 'number',
        minimum: 0,
      },
      prefix: {
        title: 'Prefix',
      },
      suffix: {
        title: 'Suffix',
      },
    },

    required: [],
  };
};
