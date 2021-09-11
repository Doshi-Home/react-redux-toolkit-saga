import { FunctionComponent, lazy } from 'react';

const UserPage = lazy(() => import('features/user'));
export interface Routes {
  path: string;
  exact: boolean;
  title: string;
  component: React.LazyExoticComponent<FunctionComponent>;
}

export const routes: Routes[] = [
  {
    path: '/',
    exact: true,
    title: 'User',
    component: UserPage
  }
];