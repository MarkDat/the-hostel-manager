import { createBrowserRouter, HashRouter as Router, RouterProvider } from 'react-router-dom';

import 'devextreme/dist/css/dx.common.css';
import 'devextreme/dist/css/dx.light.css';
import LoadPanel from 'devextreme-react/load-panel';

import logo from './logo.svg';
import './App.css';
import '@app-devextreme-override-style';
import '@app-hms-style';

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