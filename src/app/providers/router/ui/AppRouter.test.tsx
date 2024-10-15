import 'whatwg-fetch';
import { screen } from '@testing-library/react';
import { componentRender } from 'shared/lib/tests/componentRender/componentRender';
import {
  getRouteAbout,
  getRouteAdmin,
  getRouteProfile,
} from 'shared/const/router';
import { UserRole } from 'entities/User';

import AppRouter from './AppRouter';

class ResizeObserver {
  observe() {}
  unobserve() {}
  disconnect() {}
}

global.ResizeObserver = ResizeObserver;

describe('app/router/AppRouter', () => {
  test('Сторінка існує', async () => {
    componentRender(<AppRouter />, {
      route: getRouteAbout(),
    });

    const page = await screen.findByTestId(
      'AboutPage',
      {},
      { timeout: 3000 },
    );
    expect(page).toBeInTheDocument();
  });

  test('Сторінка не існує', async () => {
    componentRender(<AppRouter />, {
      route: '/wqerwfwe',
    });

    const page = await screen.findByTestId(
      'NotFoundPage',
      {},
      { timeout: 3000 },
    );
    expect(page).toBeInTheDocument();
  });

  test('Користувач не авторізований, на головну редірект', async () => {
    componentRender(<AppRouter />, {
      route: getRouteProfile('1'),
    });

    const page = await screen.findByTestId(
      'MainPage',
      {},
      { timeout: 3000 },
    );
    expect(page).toBeInTheDocument();
  });

  test('З авторизацією', async () => {
    componentRender(<AppRouter />, {
      route: getRouteProfile('1'),
      initialState: {
        user: {
          _inited: true,
          authData: {},
        },
      },
    });

    const page = await screen.findByTestId(
      'ProfilePage',
      {},
      { timeout: 3000 },
    );
    expect(page).toBeInTheDocument();
  });

  test('без ролі', async () => {
    componentRender(<AppRouter />, {
      route: getRouteAdmin(),
      initialState: {
        user: {
          _inited: true,
          authData: {},
        },
      },
    });

    const page = await screen.findByTestId(
      'ForbiddenPage',
      {},
      { timeout: 3000 },
    );
    expect(page).toBeInTheDocument();
  });

  test('з роллю', async () => {
    componentRender(<AppRouter />, {
      route: getRouteAdmin(),
      initialState: {
        user: {
          _inited: true,
          authData: { roles: [UserRole.ADMIN] },
        },
      },
    });

    const page = await screen.findByTestId(
      'AdminPanelPage',
      {},
      { timeout: 3000 },
    );
    expect(page).toBeInTheDocument();
  });
});
