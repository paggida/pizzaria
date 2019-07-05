import { StyleSheet } from 'react-native';
import { colors, metrics } from '~/styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
  },
  containerRow: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  logo: {
    marginBottom: metrics.baseMargin,
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.regular,
  },
});

export default styles;
