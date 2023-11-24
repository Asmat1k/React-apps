import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { Button, Form, Input, message } from 'antd';
import { LockOutlined, MailOutlined } from '@ant-design/icons';

import { changeEmail, changeIsLogged, changeName } from '../../app/appSlice';
import { useAppSelector } from '../../app/appHooks';

import styles from './login.module.scss';

const validateMessages = {
  required: '${label} is required!',
  types: {
    email: '${label} is not a valid email!',
    password: '${label} is not a valid password!',
  },
};

function Login() {
  const { isLogged } = useAppSelector((state) => state.userReducer.user);
  const navigation = useNavigate();
  const [form] = Form.useForm();

  const dispatch = useDispatch();
  const changeIsLoggedState = () => dispatch(changeIsLogged());
  const changeEmailState = (str: string) => dispatch(changeEmail(str));
  const changeNameState = (str: string) => dispatch(changeName(str));

  const onReset = () => {
    form.resetFields();
  };

  function onSubmit(values) {
    form.resetFields();

    //---------------------
    const mockedData = {
      email: values.email,
      name: '-',
    };
    //---------------------
    changeEmailState(values.email);
    changeNameState('');
    localStorage.setItem('isLogged', JSON.stringify(mockedData));

    changeIsLoggedState();
    navigation('/posts');
    message.success('You are successful logged in!');
  }

  let isItemDisabled = false;
  if (isLogged) {
    isItemDisabled = true;
    message.error('You are already logged in!');
  }

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>LOGIN</h2>
      <Form
        disabled={isItemDisabled}
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
