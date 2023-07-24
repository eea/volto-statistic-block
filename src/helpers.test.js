import {
  createParagraph,
  serializeToNodes,
  serializeNodes,
  getFieldURL,
} from './helpers';
import config from '@plone/volto/registry';

jest.mock('@plone/volto/registry', () => ({
  settings: {
    slate: {
      defaultBlockType: 'test_type',
    },
  },
}));

jest.mock('@plone/volto-slate/editor/render', () => ({
  serializeNodes: jest.fn(() => 'serialized'),
}));

describe('serializeToNodes', () => {
  it('returns valid nodes array', () => {
    const nodes = [
      { children: [{ text: 'test1' }] },
      { children: [{ text: 'test2' }] },
    ];
    expect(serializeToNodes(nodes)).toEqual(nodes);
  });

  it('returns single paragraph for string input', () => {
    const string = 'Test string';
    const expected = [
      {
        type: 'test_type',
        children: [{ text: string }],
      },
    ];
    expect(serializeToNodes(string)).toEqual(expected);
  });

  it('returns paragraph with empty string for non-string, non-valid nodes array input', () => {
    const expected = [
      {
        type: 'test_type',
        children: [{ text: '' }],
      },
    ];
    expect(serializeToNodes(42)).toEqual(expected);
    expect(serializeToNodes(null)).toEqual(expected);
    expect(serializeToNodes({})).toEqual(expected);
  });
});

describe('createParagraph', () => {
  it('returns a paragraph with the provided text', () => {
    const text = 'Hello, World!';
    const expected = {
      type: config.settings.slate.defaultBlockType,
      children: [{ text: text }],
    };
    expect(createParagraph(text)).toEqual(expected);
  });
});

describe('serializeNodes', () => {
  it('serializes nodes', () => {
    const nodes = [
      { children: [{ text: 'foo' }] },
      { children: [{ text: 'bar' }] },
    ];
    expect(serializeNodes(nodes)).toEqual('serialized');
  });
});

describe('getFieldURL', () => {
  it('handles a URL type object with type and value', () => {
    const data = {
      '@type': 'URL',
      value: 'value_url',
      url: 'url_url',
      href: 'href_url',
    };
    expect(getFieldURL(data)).toEqual('value_url');
  });

  it('handles an object with type and url', () => {
    const data = {
      '@type': 'URL',
      url: 'url_url',
      href: 'href_url',
    };
    expect(getFieldURL(data)).toEqual('url_url');
  });

  it('handles an object with type and href', () => {
    const data = {
      '@type': 'URL',
      href: 'href_url',
    };
    expect(getFieldURL(data)).toEqual('href_url');
  });

  it('handles an object with type and no value, url and href', () => {
    const data = {
      '@type': 'URL',
    };
    expect(getFieldURL(data)).toEqual({ '@type': 'URL' });
  });

  it('handles an object without a specific type and url', () => {
    const data = {
      url: 'url_url',
      href: 'href_url',
    };
    expect(getFieldURL(data)).toEqual('url_url');
  });

  it('handles an object without a specific type and href', () => {
    const data = {
      href: 'href_url',
    };
    expect(getFieldURL(data)).toEqual('href_url');
  });

  it('handles an object without a specific type and no id, url, href', () => {
    const data = {
      test: 'test_url',
    };
    expect(getFieldURL(data)).toEqual({
      test: 'test_url',
    });
  });

  it('handles an array', () => {
    const data = [
      {
        '@type': 'URL',
        value: 'value_url',
        url: 'url_url',
        href: 'href_url',
      },
      {
        '@id': 'id_url',
        url: 'url_url',
        href: 'href_url',
      },
    ];
    expect(getFieldURL(data)).toEqual(['value_url', 'id_url']);
  });

  it('handles a string', () => {
    const data = '/some/url';
    expect(getFieldURL(data)).toEqual('/some/url');
  });

  it('returns the data unchanged for non-object/non-array/non-string inputs', () => {
    expect(getFieldURL(42)).toEqual(42);
    expect(getFieldURL(undefined)).toEqual(undefined);
    expect(getFieldURL(null)).toEqual(null);
  });
});
