import { Route } from 'react-router-dom';

const PublicRoute: React.FC<{
  component: React.FC;
  path: string;
  exact: boolean;
}> = (props) => {
  return (
    <Route path={props.path} exact={props.exact} component={props.component} />
  );
};

export default PublicRoute;
