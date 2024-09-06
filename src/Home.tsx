import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useStore } from 'ndzy-utils';
import { FloatButton, Tree, TreeProps } from 'antd';
import { PlusOutlined } from '@ant-design/icons';

const Home: React.FC = () => {
  const navigate = useNavigate();
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
    store.api.article.find(selectedKeysValue[0] as string).then(() => {
      navigate('/view');
    });
  };

  return (
    <>
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
      <FloatButton.Group shape="circle" style={{ insetInlineEnd: 16 }}>
        <FloatButton
          icon={<PlusOutlined />}
          onClick={() => {
            navigate('/add');
          }}
        />
      </FloatButton.Group>
    </>
  );
};

export default Home;
