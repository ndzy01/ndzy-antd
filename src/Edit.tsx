import { Button, Input, Form, InputNumber } from 'antd';
import { EditorMd } from './Md';
import { useStore } from 'ndzy-utils';

const EditArticle = ({ order, title, content, id }: any) => {
  const store = useStore();

  return (
    <Form
      initialValues={{ title, content, order }}
      onFinish={(v) => {
        store.api.article.save(id, { ...v, order: Number(v.order) }).then();
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
        <InputNumber style={{ width: '100%' }} placeholder="请输入顺序" />
      </Form.Item>

      <Button disabled={store.loading} htmlType="submit" type={'primary'}>
        提交
      </Button>
    </Form>
  );
};

export default EditArticle;
