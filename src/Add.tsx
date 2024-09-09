import {
  Button,
  Input,
  Form,
  InputNumber,
  TreeSelect,
  Spin,
  FloatButton,
} from 'antd';
import { useStore } from 'ndzy-utils';
import { EditorMd } from './Md';
import { useNavigate } from 'react-router-dom';
import { HomeOutlined } from '@ant-design/icons';
import useFull from './useFull.ts';

const AddArticle = () => {
  const { ref } = useFull();
  const navigate = useNavigate();
  const store = useStore();

  return store.loading ? (
    <Spin size="large" />
  ) : (
    <div
      ref={ref}
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
      }}
    >
      <Form
        initialValues={{ title: '', content: '', order: '' }}
        onFinish={(v) => {
          store.api.article
            .create({
              ...v,
              order: Number(v.order),
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

        <Form.Item
          name="order"
          rules={[{ required: true, message: '顺序不能为空' }]}
        >
          <InputNumber placeholder="请输入顺序" style={{ width: '100%' }} />
        </Form.Item>

        <Button disabled={store.loading} htmlType="submit" type={'primary'}>
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
    </div>
  );
};

export default AddArticle;
