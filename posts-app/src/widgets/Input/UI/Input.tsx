import { SaveOutlined } from '@ant-design/icons';
import { Button, Form, Input } from 'antd';

import styles from './Input.module.scss';

interface InputProps {
  value: string;
  typeName: string;
  onSave: any;
}

const validateMessages = {
  required: '${label} is required!',
  types: {
    email: '${label} is not a valid email!',
    string: '${label} is not a valid password!',
  },
};

export function CustomInput({ value, typeName, onSave }: InputProps) {
  function onSubmit(values) {
    const valueToSave = typeName === 'email' ? values.email : values.string;
    onSave(valueToSave);
  }

  return (
    <Form
      className={styles.form}
      onFinish={onSubmit}
      validateMessages={validateMessages}
    >
      <Form.Item
        className={styles.input}
        initialValue={value}
        style={{ margin: 0 }}
        name={typeName}
        rules={[
          {
            required: true,
            type: typeName === 'email' ? 'email' : 'string',
          },
        ]}
      >
        <Input placeholder={value} />
      </Form.Item>
      <Form.Item style={{ margin: 0 }}>
        <Button type="primary" htmlType="submit">
          <SaveOutlined />
        </Button>
      </Form.Item>
    </Form>
  );
}
