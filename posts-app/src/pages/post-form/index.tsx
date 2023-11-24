import { useNavigate, useParams } from 'react-router-dom';

import { Button, Form, Input, message } from 'antd';

import {
  useAddPostMutation,
  useGetOnePostQuery,
  useUpdatePostMutation,
} from '../../shared/api/jsonApi';
import { Loader } from '../../widgets/Loader';
import { PostType } from '../../shared/types/api';

import styles from './post-form.module.scss';

const validateMessages = {
  required: '${label} is required!',
  types: {
    string: '${label} is not a valid email!',
  },
};

function PostForm() {
  const [form] = Form.useForm();
  const navigation = useNavigate();
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

  const messageOnSuccess = isEditMode
    ? 'The post has been successfully edited'
    : 'The post was created successfully';
  const onFinish = async (values: any) => {
    form.resetFields();
    const valToObj = {
      title: values.title,
      body: values.text,
      id: isEditMode ? id : Date.now(),
      userId: 123,
    };
    const response = isEditMode
      ? await updatePost(valToObj)
      : await addPost(valToObj);

    if (response) {
      message.success(messageOnSuccess);
      navigation('/posts');
    } else message.error('Error in request!');
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
