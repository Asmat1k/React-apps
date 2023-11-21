import { Link, useNavigate } from 'react-router-dom';
import styles from './login.module.scss';
import { Button, Form, Input } from 'antd';
import { dataSlice } from '../../app/appSlice';
import { useDispatch } from 'react-redux';
import { LockOutlined, MailOutlined } from '@ant-design/icons';

const validateMessages = {
  required: '${label} is required!',
  types: {
    email: '${label} is not a valid email!',
    password: '${label} is not a valid password!',
  },
};

function Login() {
  const navigation = useNavigate();
  const [form] = Form.useForm();

  const dispatch = useDispatch();
  const { changeIsLogged } = dataSlice.actions;
  const changeIsLoggedState = () => dispatch(changeIsLogged());

  const onReset = () => {
    form.resetFields();
  };

  function onSubmit() {
    form.resetFields();
    localStorage.setItem('isLogged', 'true');
    changeIsLoggedState();
    navigation('/posts');
  }

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>LOGIN</h2>
      <Form
        className={styles.form}
        form={form}
        onFinish={onSubmit}
        validateMessages={validateMessages}
      >
        <Form.Item
          name="email"
          rules={[
            {
              required: true,
              type: 'email',
            },
          ]}
        >
          <Input
            prefix={<MailOutlined className="site-form-item-icon" />}
            placeholder="E-mail"
          />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input.Password
            prefix={<LockOutlined className="site-form-item-icon" />}
            placeholder="Password"
          />
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
        <div className={styles.link}>
          Dont have an account? <Link to="/reg">Register</Link>
        </div>
      </Form>
    </div>
  );
}

export default Login;
