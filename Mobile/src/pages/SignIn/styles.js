import { StyleSheet } from 'react-native';
import { colors, metrics } from '~/styles';

export const styles = StyleSheet.create({
  container: {
    position: 'absolute',
  },
  background: {
    position: 'absolute',
    height: metrics.screenHeigth,
    width: metrics.screenWidth,
  },
  containerForm: {
    flex: 1,
    height: metrics.screenHeigth,
    width: metrics.screenWidth,
    flexDirection: 'row',
    alignItems: 'center',
  },
  form: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
  },
  buttonSignUp: {
    marginTop: metrics.baseMargin * 3,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.white,
  },
});

export default styles;
