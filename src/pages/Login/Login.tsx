import { useState } from 'react';
import { LoginComponent } from '../../stories/LoginComponent/LoginComponent';

const Login = () => {
  const [loading] = useState(false);

  const onFinish = ({
    password,
    phoneNumber,
  }: {
    password: string;
    phoneNumber: string;
  }) => {};

  return <LoginComponent loading={loading} onFinish={onFinish} />;
};

export default Login;
