import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useStore } from 'ndzy-utils';
import { FloatButton, Spin } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import useFull from './useFull.ts';
import ITree from './ITree.tsx';

const Home: React.FC = () => {
  const { ref, enterFullscreen } = useFull();
  const navigate = useNavigate();
  const store = useStore();

  enterFullscreen();

  return store.loading ? (
    <Spin size="large" />
  ) : (
    <div
      ref={ref}
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
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
