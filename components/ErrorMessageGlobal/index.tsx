import { ErrorMessage } from 'formik';
import './index.scss';

interface ErrorMessageGlobalProps {
  name: string;
  classCustom?: string
}

function ErrorMessageGlobal(props: ErrorMessageGlobalProps): JSX.Element {
  const { name, classCustom } = props;

  return (
    <ErrorMessage
      component="span"
      className={`error-message-global ${classCustom}`}
      name={name}
    />
  );
}

export default ErrorMessageGlobal;
