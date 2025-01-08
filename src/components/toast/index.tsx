import 'react-toastify/dist/ReactToastify.css';

import {
  Bounce,
  toast,
  ToastContainer as ToastOption,
  ToastOptions,
} from 'react-toastify';

import { TAlert } from './types';

const ToastContainer = () => {
  return (
    <ToastOption
      position="top-right"
      autoClose={1000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"
      transition={Bounce}
    />
  );
};

const Toast = ({ message }: { message: string }) => {
  return (
    <article>
      <h3 className="text-medium">{message}</h3>
    </article>
  );
};

export const notify = (
  type: TAlert,
  message: string,
  options?: ToastOptions,
) => {
  switch (type) {
    case 'error':
      toast.error(<Toast message={message} />, options);
      break;
    case 'success':
      toast.success(<Toast message={message} />, options);
      break;
    case 'info':
      toast.info(<Toast message={message} />, options);
      break;
    case 'warning':
      toast.warning(<Toast message={message} />, options);
      break;
    default:
      break;
  }
};

export default ToastContainer;
