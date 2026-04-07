import React from 'react';
import { BlockDataForm } from '@plone/volto/components/manage/Form';
import SidebarPortal from '@plone/volto/components/manage/Sidebar/SidebarPortal';
import { useIntl } from 'react-intl';
import View from './View';
import { default as editSchema } from './schema';

import './styles.less';

const Edit = (props) => {
  const { data = {}, block = null, selected = false, onChangeBlock } = props;
  const intl = useIntl();
  const schema = editSchema({ data, intl });

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
