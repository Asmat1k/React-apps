import { useParams } from 'react-router-dom';

import { Empty } from 'antd';

import styles from './not-found.module.scss';

function NotFoundPage() {
  const query = useParams();
  const descriptionText = `Sorry, we didn't found "${query['*']}" page`;
  return <Empty className={styles.empty} description={descriptionText} />;
}

export default NotFoundPage;
