import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useStore } from 'ndzy-utils';
import { FloatButton, Spin } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import useFull from './useFull.ts';
import ITree from './ITree.tsx';
import { useInterval } from 'ahooks';

const Home: React.FC = () => {
  const { ref, enterFullscreen } = useFull();
  const navigate = useNavigate();
  const store = useStore();

  useInterval(enterFullscreen, 10000);

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
