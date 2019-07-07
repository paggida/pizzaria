import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import SignIn from '~/pages/SignIn';
import SignUp from '~/pages/SignUp';
import Products from '~/pages/Products';
import Types from '~/pages/Types';
import Sizes from '~/pages/Sizes';
import History from '~/pages/History';
import ShoppingCart from '~/pages/ShoppingCart';
import Purchase from '~/pages/Purchase';

const Routes = createAppContainer(
  createSwitchNavigator(
    {
      SignIn,
      SignUp,
      Products,
      History,
      ShoppingCart,
      Purchase,
      Types,
      Sizes,
    },
    {
      initialRouteName: 'SignIn',
    },
  ),
);

export default Routes;
