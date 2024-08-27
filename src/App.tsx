import React, { useEffect, useState } from 'react';
import { Layout, Menu, theme } from 'antd';
import { useStore } from 'ndzy-utils';

const { Header, Content, Footer, Sider } = Layout;

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

  console.log(store.articles);

  return (
    <Layout hasSider>
      <Sider style={siderStyle}>
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          mode="inline"
          items={store.articles as never}
          selectedKeys={keys}
          onSelect={({ selectedKeys }) => setKeys(selectedKeys)}
        />
      </Sider>
      <Layout style={{ marginInlineStart: 200 }}>
        <Header style={{ padding: 0, background: colorBgContainer }} />
        <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
          <div
            style={{
              padding: 24,
              textAlign: 'center',
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            {JSON.stringify(store.article)}
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          Ant Design ©{new Date().getFullYear()} Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};

export default App;
