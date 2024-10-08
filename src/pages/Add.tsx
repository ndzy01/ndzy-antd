import { Button, Input, Form, TreeSelect, Spin, FloatButton } from 'antd';
import { useStore } from 'ndzy-utils';
import { EditorMd } from '../components/Md.tsx';
import { useNavigate } from 'react-router-dom';
import { HomeOutlined } from '@ant-design/icons';

const AddArticle = () => {
  const navigate = useNavigate();
  const store = useStore();

  return store.loading ? (
    <Spin size="large" />
  ) : (
    <>
      <Form
        initialValues={{ title: '', content: '' }}
        onFinish={(v) => {
          store.api.article
            .create({
              ...v,
            })
            .then(() => {
              navigate('/');
            });
        }}
      >
        <Form.Item name="parentId">
          <TreeSelect
            showSearch
            style={{ width: '100%' }}
            dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
            placeholder="请选择父级目录"
            allowClear
            treeDefaultExpandAll
            treeData={store.articles}
          />
        </Form.Item>

        <Form.Item
          name="title"
          rules={[{ required: true, message: '标题不能为空' }]}
        >
          <Input placeholder="请输入标题" />
        </Form.Item>

        <Form.Item
          name="content"
          rules={[{ required: true, message: '内容不能为空' }]}
        >
          <EditorMd />
        </Form.Item>

        <Button
          disabled={store.loading}
          htmlType="submit"
          type={'primary'}
          block
        >
          提交
        </Button>
      </Form>
      <FloatButton.Group shape="circle" style={{ insetInlineEnd: 24 }}>
        <FloatButton
          icon={<HomeOutlined />}
          onClick={() => {
            navigate('/');
          }}
        />
      </FloatButton.Group>
    </>
  );
};

export default AddArticle;
