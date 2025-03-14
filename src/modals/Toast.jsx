import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Toast = () => {
  return (
    <ToastContainer position="bottom-right" autoClose={2000} hideProgressBar newestOnTop />
  )
}

export default Toast
