import { Button, Form, Input } from 'antd';
import styles from './post-form.module.scss';

const validateMessages = {
  required: '${label} is required!',
  types: {
    string: '${label} is not a valid email!',
  },
};

function PostForm() {
  const [form] = Form.useForm();

  const onReset = () => {
    form.resetFields();
  };

  const onFinish = (values: any) => {
    form.resetFields();
    console.log(values);
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>FORM</h2>
      <Form
        form={form}
        name="post-form"
        onFinish={onFinish}
        className={styles.form}
        validateMessages={validateMessages}
      >
        <Form.Item
          name="Title"
          label="Title"
          rules={[{ required: true, min: 3 }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="Text"
          label="Text"
          rules={[{ required: true, min: 10 }]}
        >
          <Input.TextArea />
        </Form.Item>
        <div className={styles.btns}>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
          <Form.Item>
            <Button onClick={onReset}>Reset</Button>
          </Form.Item>
        </div>
      </Form>
    </div>
  );
}

export default PostForm;
