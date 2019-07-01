import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import SignIn from '~/pages/SignIn';

const Routes = createAppContainer(
  createSwitchNavigator(
    {
      SignIn,
    },
    {
      initialRouteName: 'SignIn',
    },
  ),
);

export default Routes;
