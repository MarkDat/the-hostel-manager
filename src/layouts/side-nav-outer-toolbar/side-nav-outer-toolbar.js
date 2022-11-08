import { Template } from 'devextreme-react/core/template';
import Drawer from 'devextreme-react/drawer';
import ScrollView from 'devextreme-react/scroll-view';
import React, { useCallback, useRef, useState } from 'react';
import { useNavigate } from 'react-router';
import { Footer, Header, SideNavigationMenu } from '../../components';
import { useScreenSize } from '../../utils/media-query';
import { useMenuPatch } from '../../utils/patches';
import './side-nav-outer-toolbar.scss';


export const employeesList = ['John Heart', 'Samantha Bright', 'Arthur Miller', 'Robert Reagan', 'Greta Sims', 'Brett Wade',
  'Sandra Johnson', 'Ed Holmes', 'Barb Banks', 'Kevin Carter', 'Cindy Stanwick', 'Sammy Hill', 'Davey Jones', 'Victor Norris',
  'Mary Stern', 'Robin Cosworth', 'Kelly Rodriguez', 'James Anderson', 'Antony Remmen', 'Olivia Peyton', 'Taylor Riley',
  'Amelia Harper', 'Wally Hobbs', 'Brad Jameson', 'Karen Goodson', 'Marcus Orbison', 'Sandy Bright', 'Morgan Kennedy',
  'Violet Bailey', 'Ken Samuelson', 'Nat Maguiree', 'Bart Arnaz', 'Leah Simpson', 'Arnie Schwartz', 'Billy Zimmer', 'Samantha Piper',
  'Maggie Boxter', 'Terry Bradley', 'Gabe Jones', 'Lucy Ball', 'Jim Packard', 'Hannah Brookly', 'Harv Mudd', 'Clark Morgan',
  'Todd Hoffman', 'Jackie Garmin', 'Lincoln Bartlett', 'Brad Farkus', 'Jenny Hobbs', 'Dallas Lou', 'Stu Pizaro'];


export default function SideNavOuterToolbar({ title, children }) {
  const scrollViewRef = useRef(null);
  const navigate = useNavigate();
  const { isXSmall, isLarge } = useScreenSize();
  const [patchCssClass, onMenuReady] = useMenuPatch();
  const [menuStatus, setMenuStatus] = useState(
    isLarge ? MenuStatus.Opened : MenuStatus.Closed
  );

  const toggleMenu = useCallback(({ event }) => {
    setMenuStatus(
      prevMenuStatus => prevMenuStatus === MenuStatus.Closed
        ? MenuStatus.Opened
        : MenuStatus.Closed
    );
    event.stopPropagation();
  }, []);

  const temporaryOpenMenu = useCallback(() => {
    setMenuStatus(
      prevMenuStatus => prevMenuStatus === MenuStatus.Closed
        ? MenuStatus.TemporaryOpened
        : prevMenuStatus
    );
  }, []);

  const onOutsideClick = useCallback(() => {
    // setMenuStatus(
    //   prevMenuStatus => prevMenuStatus !== MenuStatus.Closed && !isLarge
    //     ? MenuStatus.Closed
    //     : prevMenuStatus
    // );

    setMenuStatus(
      prevMenuStatus => !isLarge
        ? MenuStatus.Closed
        : prevMenuStatus
    );

    return !isLarge;
  }, [isLarge]);

  const onNavigationChanged = useCallback(({ itemData, event, node }) => {
    if (menuStatus === MenuStatus.Closed || !itemData.path || node.selected) {
      event.preventDefault();
      return;
    }

    navigate(itemData.path);
    scrollViewRef.current.instance.scrollTo(0);

    if (!isLarge || menuStatus === MenuStatus.TemporaryOpened) {
      setMenuStatus(MenuStatus.Closed);
      event.stopPropagation();
    }
  }, [navigate, menuStatus, isLarge]);

  return (
    <div className={'side-nav-outer-toolbar'}>
      <Header
        menuToggleEnabled
        toggleMenu={toggleMenu}
        title={title}
      />
      <Drawer
        className={['drawer', patchCssClass].join(' ')}
        position={'before'}
        closeOnOutsideClick={onOutsideClick}
        openedStateMode={isLarge ? 'shrink' : 'overlap'}
        revealMode={isXSmall ? 'slide' : 'expand'}
        minSize={isXSmall ? 0 : 60}
        maxSize={208}
        shading={isLarge ? false : true}
        opened={menuStatus === MenuStatus.Closed ? false : true}
        template={'menu'}
      >
        <div className={'container'}>
          <ScrollView ref={scrollViewRef} className={'layout-body with-footer'}>
            <div className={'content'}>
              {React.Children.map(children, (item) => {
                return item.type !== Footer && item;
              })}
            </div>
            <div className={'content-block'}>
              {React.Children.map(children, (item) => {
                return item.type === Footer && item;
              })}
            </div>
          </ScrollView>
        </div>
        <Template name={'menu'}>
          <SideNavigationMenu
            compactMode={menuStatus === MenuStatus.Closed}
            selectedItemChanged={onNavigationChanged}
            openMenu={temporaryOpenMenu}
            onMenuReady={onMenuReady}
          >
          </SideNavigationMenu>
        </Template>
      </Drawer>
    </div>
  );
}

const MenuStatus = {
  Closed: 1,
  Opened: 2,
  TemporaryOpened: 3
};
