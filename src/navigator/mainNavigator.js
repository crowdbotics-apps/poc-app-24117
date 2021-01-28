import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import UserProfile197652Navigator from '../features/UserProfile197652/navigator';
import Maps197633Navigator from '../features/Maps197633/navigator';
import Settings197611Navigator from '../features/Settings197611/navigator';
import Settings197596Navigator from '../features/Settings197596/navigator';
import NotificationList197595Navigator from '../features/NotificationList197595/navigator';
import Maps197594Navigator from '../features/Maps197594/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
UserProfile197652: { screen: UserProfile197652Navigator },
Maps197633: { screen: Maps197633Navigator },
Settings197611: { screen: Settings197611Navigator },
Settings197596: { screen: Settings197596Navigator },
NotificationList197595: { screen: NotificationList197595Navigator },
Maps197594: { screen: Maps197594Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
