import { StyleSheet } from 'react-native';
import { colors, metrics } from '~/styles';

const styles = StyleSheet.create({
  container: {
    borderRadius: metrics.baseRadius * 2,
    marginHorizontal: metrics.baseMargin * 2,
    marginBottom: metrics.baseMargin,
    backgroundColor: colors.white,
    padding: metrics.baseMargin * 2,
    elevation: 1,
  },
  containerRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  containerInfo: {
    flex: 1,
    marginLeft: metrics.baseMargin,
    justifyContent: 'space-between',
  },
  containerData: {
    flexDirection: 'column',
  },
  image: {
    height: 79,
    width: 79,
    borderRadius: metrics.baseRadius,
  },
  description: {
    fontSize: 12,
    color: colors.primary,
    marginBottom: metrics.baseMargin / 2,
  },
  size: {
    fontSize: 11,
    color: colors.text,
    lineHeight: 14,
    marginBottom: metrics.baseMargin / 2,
  },
  price: {
    fontSize: 16,
    color: colors.primary,
    fontWeight: 'bold',
  },
  icon: {
    color: colors.secondary,
    marginRight: metrics.baseMargin / 2,
  },
});

export default styles;
