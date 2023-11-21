import styles from './login.module.scss';
import { Button, Form, Input } from 'antd';

const validateMessages = {
  required: '${label} is required!',
  types: {
    email: '${label} is not a valid email!',
    password: '${label} is not a valid password!',
  },
};

function Login() {
  const [form] = Form.useForm();

  const onReset = () => {
    form.resetFields();
  };

  function onSubmit() {
    localStorage.setItem('isLogged', 'true');
    form.resetFields();
  }

  return (
    <>
      <Form
        className={styles.form}
        form={form}
        onFinish={onSubmit}
        validateMessages={validateMessages}
      >
        <Form.Item
          label="E-mail"
          name="email"
          rules={[
            {
              required: true,
              type: 'email',
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input.Password />
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
    </>
  );
}

export default Login;
