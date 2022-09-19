import React from 'react';
import { SidebarPortal, BlockDataForm } from '@plone/volto/components';
import View from './View';
import schema from './schema';

import './styles.less';

const Edit = (props) => {
  const { data = {}, block = null, selected = false, onChangeBlock } = props;

  return (
    <>
      <View {...props} mode="edit" />

      <SidebarPortal selected={selected}>
        <BlockDataForm
          schema={schema}
          title={schema.title}
          onChangeField={(id, value) => {
            onChangeBlock(block, {
              ...data,
              [id]: value,
            });
          }}
          formData={data}
          block={block}
        />
      </SidebarPortal>
    </>
  );
};

export default Edit;
