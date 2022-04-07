import { useAppSelector } from '../../hooks';
import styles from './error-message.module.css';

function ErrorMessage(): JSX.Element | null {
  const { error } = useAppSelector((state) => state);

  if(error) {
    return (
      <div
        className={styles.div}
      >
        {error}
      </div>
    );
  }
  return null;
}

export default ErrorMessage;
