import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import { getUserAuthData } from 'entities/User';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { ButtonHTMLAttributes, ReactNode } from 'react';

interface RequireAuthProps {
  children: ReactNode;
}

export function RequireAuth(props: RequireAuthProps) {
  const { children } = props;
  const auth = useSelector(getUserAuthData);

  if (!auth) {
    return <Navigate to={RoutePath.main} replace />;
  }
  return children;
}
