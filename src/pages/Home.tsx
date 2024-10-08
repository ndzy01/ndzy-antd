import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useStore } from 'ndzy-utils';
import { FloatButton, Spin } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import ITree from '../components/ITree.tsx';

const Home: React.FC = () => {
  const navigate = useNavigate();
  const store = useStore();

  useEffect(() => {
    store.api.article.query();
  }, []);

  return store.loading ? (
    <Spin size="large" />
  ) : (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
      }}
    >
      <ITree />
      <FloatButton.Group shape="circle" style={{ insetInlineEnd: 16 }}>
        <FloatButton
          icon={<PlusOutlined />}
          onClick={() => {
            navigate('/add');
          }}
        />
      </FloatButton.Group>
    </div>
  );
};

export default Home;
