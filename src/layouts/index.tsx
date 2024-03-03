import { Link, Outlet } from 'umi';
import styles from './index.less';
import { routes } from '../../config/routes';
import React from 'react';

export default function Layout() {
  return (
    <div className={styles.navs}>
      <ul>
        {
          routes.map( route => (
          <li key={route.path}>
            <Link to={route.path}>{route.name}</Link>
          </li>
          ))
        }
        <li>
          <a href="https://github.com/umijs/umi">Github</a>
        </li>
      </ul>
      <Outlet />
    </div>
  );
}
