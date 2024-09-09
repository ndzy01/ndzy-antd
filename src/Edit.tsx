import { Button, Input, Form, InputNumber, Spin, FloatButton } from 'antd';
import { EditorMd } from './Md';
import { useStore } from 'ndzy-utils';
import { useNavigate } from 'react-router-dom';
import { HomeOutlined } from '@ant-design/icons';
import useFull from './useFull.ts';

const EditArticle = () => {
  const { ref } = useFull();
  const store = useStore();
  const navigate = useNavigate();

  return store.loading ? (
    <Spin size="large" />
  ) : (
    <div ref={ref} style={{ padding: 16 }}>
      <Form
        initialValues={{
          title: store.article?.title,
          content: store.article?.content,
          order: store.article?.order,
        }}
        onFinish={(v) => {
          if (!store.article?.id) return;

          store.api.article
            .save(store.article?.id, { ...v, order: Number(v.order) })
            .then(() => {
              navigate('/');
            });
        }}
      >
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
          <InputNumber
            style={{ width: '100%' }}
            placeholder="请输入顺序"
            min={0}
          />
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

export default EditArticle;
