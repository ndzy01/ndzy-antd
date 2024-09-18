import { Button, Input, Form, Spin, FloatButton } from 'antd';
import { EditorMd } from './Md';
import { useStore } from 'ndzy-utils';
import { useNavigate, useParams } from 'react-router-dom';
import { HomeOutlined } from '@ant-design/icons';
import { useMount, useUpdateEffect } from 'ahooks';

const EditArticle = () => {
  const store = useStore();
  const { id: aId } = useParams();
  const navigate = useNavigate();

  const init = () => {
    if (!aId) {
      navigate('/');
    }

    store.api.article.find(aId || '');
  };

  useUpdateEffect(() => {
    init();
  }, [aId]);

  useMount(() => {
    init();
  });

  return store.loading ? (
    <Spin size="large" />
  ) : (
    <>
      <Form
        initialValues={{
          title: store.article?.title,
          content: store.article?.content,
        }}
        onFinish={(v) => {
          if (!store.article?.id) return;

          store.api.article.save(store.article?.id, { ...v }).then(() => {
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

export default EditArticle;
