import { Popconfirm, Space, Tree, TreeProps } from 'antd';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useStore } from 'ndzy-utils';
import { DeleteOutlined, EditOutlined, EyeOutlined } from '@ant-design/icons';

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
      titleRender={(d) => {
        return (
          <Space size={'large'}>
            {d.title as string}

            <EyeOutlined
              onClick={() => {
                navigate(`/view/${d.key}`);
              }}
            />

            <EditOutlined
              onClick={() => {
                navigate(`/edit/${d.key}`);
              }}
            />

            <Popconfirm
              title="删除后不可恢复"
              description="确认删除？"
              onConfirm={() => {
                store.api.article.del(d.key as string).then();
              }}
              onCancel={() => {}}
              okText="确认"
              cancelText="取消"
            >
              <DeleteOutlined />
            </Popconfirm>
          </Space>
        );
      }}
    />
  );
};

export default ITree;
