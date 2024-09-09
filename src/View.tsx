import { MdCatalog, MdPreview } from 'md-editor-rt';
import { v4 as uuidv4 } from 'uuid';
import 'md-editor-rt/lib/style.css';
import { useStore } from 'ndzy-utils';
import { Drawer, FloatButton, Popconfirm, Spin } from 'antd';
import React, { useEffect, useState } from 'react';
import {
  HomeOutlined,
  MenuOutlined,
  DeleteOutlined,
  EditOutlined,
} from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import useFull from './useFull.ts';
import ITree from './ITree.tsx';

const scrollElement = document.documentElement;
export const View = () => {
  const { ref, enterFullscreen } = useFull();
  const navigate = useNavigate();
  const id = 'id_md_' + uuidv4();
  const store = useStore();
  const [open, setOpen] = useState(false);
  const [open1, setOpen1] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  const showDrawer1 = () => {
    setOpen1(true);
  };
  const onClose1 = () => {
    setOpen1(false);
  };

  useEffect(() => {
    if (!store.article?.id) {
      navigate('/');
    }

    enterFullscreen();
  }, [navigate, store.article?.id]);

  return store.loading ? (
    <Spin size="large" />
  ) : (
    <div ref={ref}>
      <MdPreview editorId={id} modelValue={store.article?.content} />
      <MdCatalog editorId={id} scrollElement={scrollElement} />
      <FloatButton.Group shape="circle" style={{ insetInlineEnd: 24, top: 24 }}>
        <FloatButton
          icon={<HomeOutlined />}
          onClick={() => {
            navigate('/');
          }}
        />
        <FloatButton icon={<MenuOutlined />} onClick={showDrawer1} />
        <FloatButton icon={<MenuOutlined />} onClick={showDrawer} />
        <FloatButton
          icon={<EditOutlined />}
          onClick={() => {
            navigate('/edit');
          }}
        />
        <Popconfirm
          title="删除后不可恢复"
          description="确认删除？"
          onConfirm={() => {
            if (store.article?.id) {
              store.api.article.del(store.article?.id as string).then(() => {
                navigate('/');
              });
            }
          }}
          onCancel={() => {}}
          okText="确认"
          cancelText="取消"
        >
          <FloatButton icon={<DeleteOutlined />} />
        </Popconfirm>
      </FloatButton.Group>
      <Drawer title="目录" onClose={onClose1} open={open1} zIndex={999999999}>
        <ITree />
      </Drawer>
      <Drawer title="文章目录" onClose={onClose} open={open} zIndex={999999999}>
        <MdCatalog editorId={id} scrollElement={scrollElement} />
        <div style={{ display: 'none' }}>
          <MdPreview editorId={id} modelValue={store.article?.content} />
        </div>
      </Drawer>
    </div>
  );
};
