import React, { useEffect, useState } from 'react';
import { Button, Layout, Menu, Space, Spin, Tabs, TabsProps } from 'antd';
import { useStore } from 'ndzy-utils';
import { EditorMd } from './Md.tsx';
import AddArticle from './Add.tsx';
import EditArticle from './Edit.tsx';

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
};

const App: React.FC = () => {
  const store = useStore();
  const [keys, setKeys] = useState<string[]>([]);
  const [s, setS] = useState('2');

  useEffect(() => {
    if (keys.length === 0) return;
    store.api.article.find(keys[0]).then();
  }, [keys]);

  const items: TabsProps['items'] = [
    {
      key: '1',
      label: '新增',
      children: <AddArticle />,
    },
    {
      key: '2',
      label: '详情',
      children: store.article?.content && (
        <EditorMd type="view" value={store.article.content} />
      ),
    },
    {
      key: '3',
      label: '编辑',
      children: store.article?.content && <EditArticle {...store.article} />,
    },
  ];

  return (
    <Layout hasSider>
      <Sider style={siderStyle} collapsible>
        <Menu
          theme="dark"
          mode="inline"
          items={store.articles as never}
          selectedKeys={keys}
          onSelect={({ selectedKeys }) => setKeys(selectedKeys)}
        />
      </Sider>
      <Layout style={{ marginInlineStart: 200 }}>
        <Header>
          <Space>
            <Button
              onClick={() => {
                setS('1');
              }}
            >
              新增
            </Button>
            <Button
              onClick={() => {
                setS('3');
              }}
            >
              编辑
            </Button>
            <Button
              disabled={!store.article?.id}
              onClick={() => {
                store.api.article.del(store.article?.id!);
              }}
            >
              删除
            </Button>
          </Space>
        </Header>
        {store.loading ? (
          <Spin size="large" />
        ) : (
          <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
            <Tabs defaultActiveKey="2" items={items} activeKey={s} />
          </Content>
        )}
        <Footer style={{ textAlign: 'center' }}>
          ©{new Date().getFullYear()} Created by NDZY
        </Footer>
      </Layout>
    </Layout>
  );
};

export default App;
