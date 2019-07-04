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
  purchase: {
    fontSize: 12,
    color: colors.primary,
    marginBottom: metrics.baseMargin / 2,
  },
  fromNow: {
    fontSize: 11,
    color: colors.text,
    lineHeight: 14,
    marginBottom: metrics.baseMargin / 2,
  },
  formatFullValue: {
    fontWeight: 'bold',
    fontSize: 16,
    color: colors.primary,
  },
});

export default styles;
