import React, { useState } from 'react';
import { Drawer, FloatButton, Tree, TreeProps } from 'antd';
import { useStore } from 'ndzy-utils';
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  useNavigate,
} from 'react-router-dom';
import AddArticle from './Add';
import EditArticle from './Edit';
import { View } from './View';
import {
  DeleteOutlined,
  EditOutlined,
  HomeOutlined,
  MenuOutlined,
  PlusOutlined,
} from '@ant-design/icons';

const ILayout: React.FC = () => {
  const navigate = useNavigate();
  const store = useStore();
  const [expandedKeys, setExpandedKeys] = useState<React.Key[]>([]);
  const [selectedKeys, setSelectedKeys] = useState<React.Key[]>([]);
  const [autoExpandParent, setAutoExpandParent] = useState<boolean>(true);
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const onExpand: TreeProps['onExpand'] = (expandedKeysValue) => {
    setExpandedKeys(expandedKeysValue);
    setAutoExpandParent(false);
  };

  const onSelect: TreeProps['onSelect'] = (selectedKeysValue) => {
    setSelectedKeys(selectedKeysValue);
    if (selectedKeysValue.length === 0) return;
    store.api.article.find(selectedKeysValue[0] as string).then();
  };

  return (
    <>
      <Outlet />
      <FloatButton.Group shape="circle" style={{ insetInlineEnd: 16 }}>
        <FloatButton
          icon={<HomeOutlined />}
          onClick={() => {
            navigate('/');
          }}
        />
        <FloatButton icon={<MenuOutlined />} onClick={showDrawer} />
        <FloatButton
          icon={<PlusOutlined />}
          onClick={() => {
            navigate('/add');
          }}
        />
        {store.article?.id && (
          <>
            <FloatButton
              icon={<EditOutlined />}
              onClick={() => {
                navigate('/edit');
              }}
            />
            <FloatButton
              icon={<DeleteOutlined />}
              onClick={() => {
                store.api.article.del(store.article?.id as string).then(() => {
                  window.location.reload();
                });
              }}
            />
          </>
        )}
        <FloatButton.BackTop visibilityHeight={0} />
      </FloatButton.Group>
      <Drawer title="目录" onClose={onClose} open={open}>
        <Tree
          treeData={store.articles as any}
          height={600}
          onExpand={onExpand}
          expandedKeys={expandedKeys}
          autoExpandParent={autoExpandParent}
          onSelect={onSelect}
          selectedKeys={selectedKeys}
          titleRender={(item) => {
            const title = item.title as React.ReactNode;
            return <div>{title}</div>;
          }}
        />
      </Drawer>
    </>
  );
};

const router = createBrowserRouter([
  {
    id: 'root',
    path: '*',
    Component: ILayout,
    children: [
      {
        path: '/',
        Component: View,
      },
      {
        path: '/add',
        Component: AddArticle,
      },
      {
        path: '/edit',
        Component: EditArticle,
      },
    ],
  },
]);

const App: React.FC = () => {
  return (
    <RouterProvider router={router} fallbackElement={<p>Initial Load...</p>} />
  );
};

export default App;
