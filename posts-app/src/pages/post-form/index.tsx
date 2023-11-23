import { Button, Form, Input } from 'antd';
import styles from './post-form.module.scss';
import { useParams } from 'react-router-dom';
import {
  useAddPostMutation,
  useGetOnePostQuery,
  useUpdatePostMutation,
} from '../../shared/api/jsonApi';
import { Loader } from '../../widgets/Loader';
import { PostType } from '../../shared/types/api';

const validateMessages = {
  required: '${label} is required!',
  types: {
    string: '${label} is not a valid email!',
  },
};

function PostForm() {
  const [form] = Form.useForm();
  const { id } = useParams();
  const { data = [], isLoading } = useGetOnePostQuery(id!);
  const [updatePost] = useUpdatePostMutation();
  const [addPost] = useAddPostMutation();

  if (isLoading) {
    return <Loader />;
  }

  const isEditMode = !!id;
  let titleValue, textValue;

  const postData = data as PostType;
  if (isEditMode) {
    titleValue = postData.title.toUpperCase();
    textValue = postData.body;
  }

  const onReset = () => {
    form.resetFields();
  };

  const onFinish = (values: any) => {
    form.resetFields();
    const valToObj = {
      title: values.title,
      body: values.text,
      id: isEditMode ? id : Date.now(),
      userId: 123,
    };
    isEditMode ? updatePost(valToObj) : addPost(valToObj);
  };

  const titleText = isEditMode ? `Edit ${id} post` : 'Add new post';
  const resetBtnText = isEditMode ? `Cancel changes` : 'Reset';
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>{titleText}</h2>
      <Form
        form={form}
        name="post-form"
        onFinish={onFinish}
        className={styles.form}
        validateMessages={validateMessages}
      >
        <Form.Item
          initialValue={titleValue}
          name="title"
          label="Title"
          rules={[{ required: true, min: 3 }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          initialValue={textValue}
          name="text"
          label="Text"
          rules={[{ required: true, min: 10 }]}
        >
          <Input.TextArea style={{ minHeight: 100 }} />
        </Form.Item>
        <div className={styles.btns}>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
          <Form.Item>
            <Button onClick={onReset}>{resetBtnText}</Button>
          </Form.Item>
        </div>
      </Form>
    </div>
  );
}

export default PostForm;
