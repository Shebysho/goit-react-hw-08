import { Outlet } from 'react-router-dom';
import AppBar from '../AppBar/AppBar'
import { Suspense } from 'react';
import s from './Layout.module.css'

export const Layout = () => {
  return (
    <div className={s.container}>
      <AppBar />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </div>
  );
};