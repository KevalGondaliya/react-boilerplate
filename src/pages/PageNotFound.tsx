import { routes } from '../constant';
import { Result, Button } from 'antd';
import { Link } from 'react-router-dom'; 

export default function PageNotFound() {
  return (
    <Result
      status="404"
      title="404"
      subTitle={"Page not found"}
      extra={
        <Button>
          <Link to={routes.LoginUrl}>
           Goback
          </Link>
        </Button>
      }
    />
  );
}
