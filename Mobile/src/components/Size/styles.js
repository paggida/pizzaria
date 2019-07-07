import { StyleSheet } from 'react-native';
import { colors, metrics } from '~/styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexBasis: 0,
    borderRadius: metrics.baseRadius * 2,
    marginBottom: metrics.baseMargin,
    padding: metrics.baseMargin,
    alignItems: 'center',
    maxWidth: (metrics.screenWidth - metrics.baseMargin * 3) / 2,
  },
  show: {
    elevation: 1,
    backgroundColor: colors.white,
  },
  hidden: {
    backgroundColor: colors.transparent,
  },
  description: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.primary,
    textAlign: 'center',
  },
  image: {
    flex: 1,
    height: 108,
    width: 120,
    borderRadius: metrics.baseRadius,
    marginBottom: metrics.baseMargin * 2,
  },
  price: {
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center',
    color: colors.text,
  },
});

export default styles;
