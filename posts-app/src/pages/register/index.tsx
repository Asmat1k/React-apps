import styles from './register.module.scss';
import { Link, useNavigate } from 'react-router-dom';
import { Button, Form, Input } from 'antd';
import { dataSlice } from '../../app/appSlice';
import { useDispatch } from 'react-redux';

const validateMessages = {
  required: '${label} is required!',
  types: {
    email: '${label} is not a valid email!',
    name: '${label} is not a valid name!',
    password: '${label} is not a valid password!',
  },
};

function Register() {
  const navigation = useNavigate();
  const [form] = Form.useForm();

  const dispatch = useDispatch();
  const { changeIsLogged } = dataSlice.actions;
  const changeIsLoggedState = () => dispatch(changeIsLogged());

  function onSubmit() {
    form.resetFields();
    localStorage.setItem('isLogged', 'true');
    changeIsLoggedState();
    navigation('/posts');
  }

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>REGISTRATION</h2>
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
          <Input placeholder="E-mail" />
        </Form.Item>

        <Form.Item
          label="Name"
          name="name"
          rules={[{ required: true, message: 'Please input your name!' }]}
        >
          <Input placeholder="Name" />
        </Form.Item>
        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input.Password placeholder="Password" />
        </Form.Item>

        <Form.Item
          label="Confirm password"
          name="confirm"
          dependencies={['password']}
          hasFeedback
          rules={[
            {
              required: true,
              message: 'Please confirm your password!',
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue('password') === value) {
                  return Promise.resolve();
                }
                return Promise.reject(
                  new Error('The new password that you entered do not match!')
                );
              },
            }),
          ]}
        >
          <Input.Password placeholder="Confirm-password" />
        </Form.Item>
        <div className={styles.btns}>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </div>
        <div className={styles.link}>
          Already registered? <Link to="/login">Login</Link>
        </div>
      </Form>
    </div>
  );
}

export default Register;
