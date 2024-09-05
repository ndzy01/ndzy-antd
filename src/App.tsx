import React, { useState } from 'react';
import { Button, Layout, Space, Tree, TreeProps } from 'antd';
import { useStore } from 'ndzy-utils';
import {
  createBrowserRouter,
  RouterProvider,
  Link,
  Outlet,
} from 'react-router-dom';
import AddArticle from './Add.tsx';
import EditArticle from './Edit.tsx';
import { View } from './View.tsx';

const { Content, Footer, Sider, Header } = Layout;

const siderStyle: React.CSSProperties = {
  overflow: 'auto',
  height: '100vh',
  position: 'fixed',
  insetInlineStart: 0,
  top: 0,
  bottom: 0,
  scrollbarWidth: 'thin',
  scrollbarColor: 'unset',
  padding: 16,
};

const ILayout: React.FC = () => {
  const store = useStore();
  const [expandedKeys, setExpandedKeys] = useState<React.Key[]>([]);
  const [selectedKeys, setSelectedKeys] = useState<React.Key[]>([]);
  const [autoExpandParent, setAutoExpandParent] = useState<boolean>(true);

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
    <Layout hasSider>
      <Sider theme="light" style={siderStyle} collapsible>
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
      </Sider>
      <Layout style={{ marginInlineStart: 200 }}>
        <Header style={{ padding: 16, background: '#fff' }}>
          <Space>
            <Link to="/">首页</Link>
            <Link to="/add"> 新增</Link>
            <Button disabled={!store.article?.id}>
              <Link to="/edit"> 编辑</Link>
            </Button>
            <Button
              disabled={!store.article?.id}
              onClick={() => {
                if (!store.article) return;
                store.api.article.del(store.article?.id).then(() => {
                  window.location.reload();
                });
              }}
            >
              删除
            </Button>
          </Space>
        </Header>
        <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
          <Outlet />
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          ©{new Date().getFullYear()} Created by NDZY
        </Footer>
      </Layout>
    </Layout>
  );
};

const router = createBrowserRouter([
  {
    id: 'root',
    path: '/',
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
