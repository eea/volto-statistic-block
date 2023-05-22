import isArray from 'lodash/isArray';
import isString from 'lodash/isString';
import { Node } from 'slate';
import config from '@plone/volto/registry';
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
