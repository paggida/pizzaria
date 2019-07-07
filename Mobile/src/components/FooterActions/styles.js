import { StyleSheet } from 'react-native';
import { colors, metrics } from '~/styles';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: metrics.baseMargin * 2,
    paddingTop: metrics.basePadding,
  },
  cartPlus: {
    marginHorizontal: metrics.baseMargin * 2,
    backgroundColor: colors.light,
    borderRadius: metrics.baseRadius * 10,
    padding: metrics.basePadding * 1.2,
  },
  icon: {
    color: colors.darker,
  },
  buttonIcon: {
    marginLeft: metrics.baseMargin,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: metrics.baseMargin * 2,
    backgroundColor: colors.secondary,
    borderRadius: metrics.baseRadius * 10,
    paddingVertical: metrics.basePadding,
    paddingHorizontal: metrics.basePadding * 2,
  },
  bold: {
    fontWeight: 'bold',
  },
  text: {
    fontSize: 14,
    color: colors.white,
    textAlign: 'center',
  },
});

export default styles;
