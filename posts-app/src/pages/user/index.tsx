import { useDispatch } from 'react-redux';
import { useState } from 'react';

import { Avatar, Card } from 'antd';
import { EditOutlined, UserOutlined } from '@ant-design/icons';

import { CustomInput } from '../../widgets/Input';
import { changeEmail, changeName } from '../../app/appSlice';
import { useAppSelector } from '../../app/appHooks';

import styles from './user-page.module.scss';

function UserPage() {
  const [emailEditMode, setEmailEditMode] = useState(false);
  const [nameEditMode, setNameEditMode] = useState(false);

  const { email, name } = useAppSelector((state) => state.userReducer.user);
  const dispatch = useDispatch();
  const changeEmailState = (str: string) => dispatch(changeEmail(str));
  const changeNameState = (str: string) => dispatch(changeName(str));

  function onEmailSave(newEmail) {
    changeEmailState(newEmail);
    localStorage.setItem('isLogged', JSON.stringify({ email: newEmail, name }));
    setEmailEditMode(false);
  }

  function onNameSave(newName) {
    changeNameState(newName);
    localStorage.setItem('isLogged', JSON.stringify({ email, name: newName }));
    setNameEditMode(false);
  }

  return (
    <Card className={styles.container} type="inner" title="User Profile">
      <div className={styles.body}>
        <div className={styles.img}>
          <Avatar size={64} icon={<UserOutlined />} />
        </div>
        <div className={styles.info}>
          <ul className={styles.list}>
            <li className={styles.item}>
              {emailEditMode && (
                <CustomInput
                  value={email}
                  typeName="email"
                  onSave={onEmailSave}
                />
              )}
              {!emailEditMode && (
                <>
                  <span className={styles.title}>E-mail:</span> {email}
                  <EditOutlined onClick={() => setEmailEditMode(true)} />
                </>
              )}
            </li>
            {nameEditMode && (
              <CustomInput value={name} typeName="string" onSave={onNameSave} />
            )}
            {!nameEditMode && (
              <>
                <li className={styles.item}>
                  <span className={styles.title}>Name:</span>{' '}
                  {name ? name : '-'}
                  <EditOutlined onClick={() => setNameEditMode(true)} />
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </Card>
  );
}

export default UserPage;
