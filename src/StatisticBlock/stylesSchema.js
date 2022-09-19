export default () => {
  return {
    fieldsets: [
      {
        id: 'default',
        title: 'Default',
        fields: [
          'align',
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
        title: 'Align',
        actions: ['center', 'wide', 'full'],
      },
      backgroundInverted: {
        title: 'Background when inverted',
        choices: [
          ['primary', 'Primary'],
          ['secondary', 'Secondary'],
          ['tertiary', 'Tertiary'],
        ],
        defaultValue: 'primary',
      },
      valueVariation: {
        title: 'Value variation',
        choices: [
          ['primary', 'Primary'],
          ['secondary', 'Secondary'],
          ['tertiary', 'Tertiary'],
        ],
        defaultValue: 'secondary',
      },
      labelVariation: {
        title: 'Label variation',
        choices: [
          ['primary', 'Primary'],
          ['secondary', 'Secondary'],
          ['tertiary', 'Tertiary'],
        ],
        defaultValue: 'tertiary',
      },
      extraVariation: {
        title: 'Extra info variation',
        choices: [
          ['primary', 'Primary'],
          ['secondary', 'Secondary'],
          ['tertiary', 'Tertiary'],
        ],
        defaultValue: 'tertiary',
      },
    },

    required: [],
  };
};
