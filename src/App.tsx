import React, { useEffect, useState } from 'react';
import { Layout, Menu, Spin, theme } from 'antd';
import { useStore } from 'ndzy-utils';
import { EditorMd } from './Md.tsx';

const { Content, Footer, Sider } = Layout;

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
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  useEffect(() => {
    if (keys.length === 0) return;
    store.api.article.find(keys[0]).then();
  }, [keys]);

  return (
    <Layout hasSider>
      <Sider style={siderStyle}>
        <Menu
          theme="dark"
          mode="inline"
          items={store.articles as never}
          selectedKeys={keys}
          onSelect={({ selectedKeys }) => setKeys(selectedKeys)}
        />
      </Sider>
      <Layout style={{ marginInlineStart: 200 }}>
        {store.loading ? (
          <Spin size="large" />
        ) : (
          <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
            <div
              style={{
                padding: 24,
                background: colorBgContainer,
                borderRadius: borderRadiusLG,
              }}
            >
              {store.article?.content && (
                <EditorMd type="view" value={store.article.content} />
              )}
            </div>
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
