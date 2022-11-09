
import React, { useState, createContext, useContext, useEffect } from 'react';
import { getOnlyPathsNavigate } from 'tools/common-functions';

import { navigation } from 'app-navigation';


const NavigationContext = createContext({});
const useNavigation = () => useContext(NavigationContext);
const paths = getOnlyPathsNavigate(navigation);

function NavigationProvider(props) {
  const [navigationData, setNavigationData] = useState({ currentPath: '' });

  return (
    <NavigationContext.Provider
      value={{ navigationData, setNavigationData }}
      {...props}
    />
  );
}

function withNavigationWatcher(Component, path) {
  const WrappedComponent = function (props) {
    const { setNavigationData } = useNavigation();

    useEffect(() => {

      const windowPath = window.location.pathname;
      if(windowPath) {
        const currentPathTemp = paths.find(_ => windowPath.startsWith(_));
        setNavigationData({ currentPath: currentPathTemp });
      }
      
    }, [setNavigationData]);
    

    return {...Component, ...props};
  }
  return <WrappedComponent />;
}

export {
  NavigationProvider,
  useNavigation,
  withNavigationWatcher
}
