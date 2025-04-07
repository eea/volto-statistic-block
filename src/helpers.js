import { cloneElement, isValidElement, Children } from 'react';
import { Node } from 'slate';
import isArray from 'lodash/isArray';
import isObject from 'lodash/isObject';
import isString from 'lodash/isString';
import config from '@plone/volto/registry';
import { isInternalURL, flattenToAppURL } from '@plone/volto/helpers';
import { serializeNodes as _serializeNodes } from '@plone/volto-slate/editor/render';

function isValidNodesArray(value) {
  return isArray(value) && Node.isNodeList(value);
}

export function createParagraph(text) {
  return {
    type: config.settings.slate.defaultBlockType,
    children: [{ text }],
  };
}

export function serializeToNodes(text) {
  if (isValidNodesArray(text)) return text;
  if (isString(text)) return [createParagraph(text)];
  return [createParagraph('')];
}

export function serializeNodes(value) {
  const nodes = serializeToNodes(value);
  return _serializeNodes(nodes);
}

export const getFieldURL = (data) => {
  let url = data;
  const _isObject = data && isObject(data) && !isArray(data);
  if (_isObject && data['@type'] === 'URL') {
    url = data['value'] ?? data['url'] ?? data['href'] ?? data;
  } else if (_isObject) {
    url = data['@id'] ?? data['url'] ?? data['href'] ?? data;
  }
  if (isArray(data)) {
    url = data.map((item) => getFieldURL(item));
  }
  if (isString(url) && isInternalURL(url)) return flattenToAppURL(url);
  return url;
};

export const enhanceElementWithProps = (children, extraProps = {}) => {
  const addPropsDeep = (element) => {
    if (!isValidElement(element)) {
      return element;
    }

    const newElement = cloneElement(
      element,
      element.props?.element?.type === 'dataentity'
        ? {
            extras: {
              ...element.props.extras,
              ...extraProps,
            },
          }
        : element.props,
      element.props.children
        ? Children.map(element.props.children, (child) => addPropsDeep(child))
        : element.props.children,
    );

    return newElement;
  };

  const enhancedChildren = Children.map(children, (child) => {
    return addPropsDeep(child);
  });
  return enhancedChildren;
};
