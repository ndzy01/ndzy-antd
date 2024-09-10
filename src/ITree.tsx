import { Tree, TreeProps } from 'antd';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useStore } from 'ndzy-utils';

const { DirectoryTree } = Tree;

const ITree = () => {
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

    navigate(`/view/${selectedKeysValue[0]}`);
  };

  return (
    <DirectoryTree
      treeData={store.articles as any}
      height={600}
      onExpand={onExpand}
      expandedKeys={expandedKeys}
      autoExpandParent={autoExpandParent}
      onSelect={onSelect}
      selectedKeys={selectedKeys}
    />
  );
};

export default ITree;
