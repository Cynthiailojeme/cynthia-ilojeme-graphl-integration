import { notification } from "antd";

type NotificationType = 'success' | 'info' | 'warning' | 'error';

const Alert = (
  type: NotificationType,
  title: any,
  message: any
) => {
  notification[type]({
    message: title,
    duration: 5,
    description: message,
  });
};

export default Alert;
