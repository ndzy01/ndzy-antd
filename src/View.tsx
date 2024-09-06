import { MdCatalog, MdPreview } from 'md-editor-rt';
import { v4 as uuidv4 } from 'uuid';
import 'md-editor-rt/lib/style.css';
import { useStore } from 'ndzy-utils';
import { Drawer, FloatButton } from 'antd';
import React, { useState } from 'react';
import { HomeOutlined, MenuOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

const scrollElement = document.documentElement;
export const View = () => {
  const navigate = useNavigate();
  const id = 'id_md_' + uuidv4();
  const store = useStore();
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  return (
    <>
      <MdPreview editorId={id} modelValue={store.article?.content} />
      <FloatButton.Group shape="circle" style={{ insetInlineEnd: 24, top: 24 }}>
        <FloatButton
          icon={<HomeOutlined />}
          onClick={() => {
            navigate('/');
          }}
        />
        <FloatButton icon={<MenuOutlined />} onClick={showDrawer} />
      </FloatButton.Group>
      <Drawer title="目录" onClose={onClose} open={open}>
        <MdCatalog editorId={id} scrollElement={scrollElement} />
      </Drawer>
    </>
  );
};
