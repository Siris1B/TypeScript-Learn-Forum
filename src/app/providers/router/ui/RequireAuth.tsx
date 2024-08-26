import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { getUserAuthData, getUserRoles, UserRole } from 'entities/User';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { ReactNode, useMemo } from 'react';

interface RequireAuthProps {
  children: ReactNode;
  roles?: UserRole[];
}

export function RequireAuth(props: RequireAuthProps) {
  const { children, roles } = props;
  const auth = useSelector(getUserAuthData);
  const userRoles = useSelector(getUserRoles);

  const hasRequiredRoles = useMemo(() => {
    if (!roles) {
      return true;
    }

    return roles.some((requiredRole) => {
      return userRoles?.includes(requiredRole);
    });
  }, [roles, userRoles]);

  if (!hasRequiredRoles) {
    return <Navigate to={RoutePath.forbidden} replace />;
  }

  if (!auth) {
    return <Navigate to={RoutePath.main} replace />;
  }
  return children;
}
