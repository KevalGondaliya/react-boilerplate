import { LoginForm } from './LoginForm';
import { isDeviceMobile } from '../../utils';
import { CardBox } from '../CardBox/CardBox';

export interface LoginComponentProps {
  loading: boolean;
  onFinish: (values: any) => void;
}

export const LoginComponent: React.FC<LoginComponentProps> = ({
  loading,
  onFinish,
}) => {
  if (isDeviceMobile()) {
    return <LoginForm loading={loading} onFinish={onFinish} />;
  }

  return (
    <CardBox title="Login">
      <LoginForm loading={loading} onFinish={onFinish} />
    </CardBox>
  );
};
