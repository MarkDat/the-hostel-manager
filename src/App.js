import { createBrowserRouter, HashRouter as Router, RouterProvider } from 'react-router-dom';

import LoadPanel from 'devextreme-react/load-panel';

import logo from './logo.svg';
import './App.scss';

import Content from './Content';
import { AuthProvider, useAuth } from './contexts/auth';
import { useScreenSizeClass } from './utils/media-query';
import { NavigationProvider } from './contexts/navigation';
import UnauthenticatedContent from './UnauthenticatedContent';
import routes from './app-routes'

const router = createBrowserRouter(routes);

const App = () => {
  const { user, loading } = useAuth();

  if (loading) {
    return <LoadPanel visible={true} />;
  }

  if (user) {
    return <RouterProvider router={router} />;
  }

  return <UnauthenticatedContent />;
}

export default function Root() {
  const screenSizeClass = useScreenSizeClass();

  return (
    <AuthProvider>
        <NavigationProvider>
          <div className={`app ${screenSizeClass}`}>
            <App />
          </div>
        </NavigationProvider>
      </AuthProvider>
  );
}