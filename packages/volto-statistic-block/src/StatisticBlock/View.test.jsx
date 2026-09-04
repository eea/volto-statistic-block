import { vi } from 'vitest';
import React from 'react';
import { render } from '@testing-library/react';
import View from './View';
import isNumber from 'lodash/isNumber';
import '@testing-library/jest-dom';

vi.mock('lodash/isNumber', () => ({ default: vi.fn(() => true) }));
vi.mock('lodash/isNaN', () => ({ default: vi.fn(() => false) }));

vi.mock(
  '@eeacms/countup',
  () => ({
    CountUp: () => {
      return <div>Mocked CountUp</div>;
    },
  }),
  { virtual: true },
);

vi.mock('@plone/volto/components', () => ({
  UniversalLink: ({ children }) => <div>{children}</div>,
}));

vi.mock('@plone/volto-slate/editor/render', () => ({
  serializeNodesToText: vi.fn((nodes) => nodes[0]?.text || ''),
  serializeNodes: vi.fn((nodes) => nodes[0]?.text || ''),
}));

vi.mock('@eeacms/volto-statistic-block/helpers', () => ({
  getFieldURL: vi.fn((href) => href),
  serializeToNodes: vi.fn((text) => [{ text }]),
  serializeNodes: vi.fn((text) => text || ''),
  enhanceElementWithProps: vi.fn((children) => children),
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
