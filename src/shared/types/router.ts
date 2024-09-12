// eslint-disable-next-line feature-sliced-import-checker/layer-imports-checker
import { UserRole } from 'entities/User';
import { RouteProps } from 'react-router-dom';

export type AppRoutesProps = RouteProps & {
  authOnly?: boolean;
  roles?: UserRole[];
};
