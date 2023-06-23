import React from 'react';
import { render } from '@testing-library/react';
import View from './View';
import isNumber from 'lodash/isNumber';
import '@testing-library/jest-dom/extend-expect';

jest.mock('lodash/isNumber', () => jest.fn(() => true));
jest.mock('lodash/isNaN', () => jest.fn(() => false));

jest.mock('./components/CountUp', () => () => <div>Mocked CountUp</div>);

jest.mock('@plone/volto/components', () => ({
  UniversalLink: ({ children }) => <div>{children}</div>,
}));

jest.mock('@plone/volto-slate/editor/render', () => ({
  serializeNodesToText: jest.fn((nodes) => nodes[0]?.text || ''),
  serializeNodes: jest.fn((nodes) => nodes[0]?.text || ''),
}));

jest.mock('@eeacms/volto-statistic-block/helpers', () => ({
  getFieldURL: jest.fn((href) => href),
  serializeToNodes: jest.fn((text) => [{ text }]),
  serializeNodes: jest.fn((text) => text || ''),
}));

describe('Statistic View Component', () => {
  it('renders component with items and CountUp', () => {
    const data = {
      items: [
        {
          label: 'Test label',
          value: 'Test value',
          info: 'Test info',
        },
      ],
      animation: {
        enabled: true,
        duration: 3,
        decimals: 0,
      },
    };
    const { getByText } = render(<View data={data} mode="view" />);
    expect(getByText('Test label')).toBeInTheDocument();
    expect(getByText('Test info')).toBeInTheDocument();
    expect(getByText('Mocked CountUp')).toBeInTheDocument();
  });

  it('renders component with items and no CountUp', () => {
    const data = {
      items: [
        {
          label: 'Test label',
          value: 'Test value',
          info: 'Test info',
        },
      ],
      animation: {
        enabled: true,
        duration: 3,
        decimals: 0,
      },
    };
    isNumber.mockReturnValueOnce(false);
    const { getByText } = render(<View data={data} mode="view" />);
    expect(getByText('Test label')).toBeInTheDocument();
    expect(getByText('Test value')).toBeInTheDocument();
    expect(getByText('Test info')).toBeInTheDocument();
  });

  it('renders component in edit mode with no items', () => {
    const { getByText } = render(<View data={{ items: [] }} mode="edit" />);
    expect(getByText('Add statistic items')).toBeInTheDocument();
  });
});
