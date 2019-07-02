import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import SignIn from '~/pages/SignIn';
import SignUp from '~/pages/SignUp';
import Products from '~/pages/Products';

const Routes = createAppContainer(
  createSwitchNavigator(
    {
      SignIn,
      SignUp,
      Products,
    },
    {
      initialRouteName: 'SignIn',
    },
  ),
);

export default Routes;
