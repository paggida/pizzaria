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
  },
  name: {
    flex: 1,
    fontSize: 12,
    color: colors.primary,
    marginBottom: metrics.baseMargin / 2,
  },
  description: {
    flex: 1,
    fontSize: 11,
    color: colors.text,
    // borderWidth: 1,
    lineHeight: 14,
    marginBottom: metrics.baseMargin / 2,
  },
  icon: {
    color: colors.text,
    marginRight: metrics.baseMargin / 2,
  },
  preparation: {
    fontSize: 10,
    color: colors.text,
  },
  image: {
    height: 79,
    width: 79,
    borderRadius: metrics.baseRadius,
  },
});

export default styles;
