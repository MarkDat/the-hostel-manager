
import React, { useState, createContext, useContext, useEffect } from 'react';
import { getCurrentNavigatePath } from '@app-tools/common-functions';

import { landlordNavigation as navigation } from '../app-navigation';


const NavigationContext = createContext({});
const useNavigation = () => useContext(NavigationContext);

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

      setNavigationData({ currentPath: getCurrentNavigatePath(navigation) });
      
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
