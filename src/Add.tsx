import { Button, Input, Form, InputNumber } from 'antd';
import { useStore } from 'ndzy-utils';
import { EditorMd } from './Md.tsx';

const AddArticle = () => {
  const store = useStore();

  return (
    <Form
      initialValues={{ title: '', content: '', order: '' }}
      onFinish={(v) => {
        console.log(v);
        // store.api.article
        //   .create({
        //     ...v,
        //     parentId:
        //       v.parentId && v.parentId.length > 0 ? v.parentId[0] : undefined,
        //     order: Number(v.order),
        //   })
        //   .then();
      }}
    >
      {/*<Form.Item name="parentId" type="custom">*/}
      {/*  <ArticleSelectFormItem data={data} placeholder="请选择父级目录" />*/}
      {/*</Form.Item>*/}

      <Form.Item name="title" required>
        <Input placeholder="请输入标题" />
      </Form.Item>

      <Form.Item name="content" required>
        <EditorMd />
      </Form.Item>

      <Form.Item name="order">
        <InputNumber placeholder="请输入顺序" style={{ width: '100%' }} />
      </Form.Item>

      <Button disabled={store.loading} htmlType="submit">
        提交
      </Button>
    </Form>
  );
};

export default AddArticle;
