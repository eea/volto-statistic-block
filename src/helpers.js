import { isArray } from 'lodash';
import { serializeNodes } from 'volto-slate/editor/render';

export const serializeText = (text) => {
  return isArray(text) ? serializeNodes(text) : text;
};
