import { StyleSheet } from 'react-native';
import { colors, metrics } from '~/styles';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'flex-end',
  },
  logo: {
    height: 72,
    width: 72,
    marginBottom: metrics.baseMargin * 3,
  },
  input: {
    alignSelf: 'stretch',
    borderWidth: 1,
    borderColor: colors.light,
    borderRadius: metrics.baseRadius * 2,
    marginBottom: metrics.baseMargin,
    padding: metrics.basePadding,
    fontSize: 16,
    color: colors.regular,
  },
  defaultMargin: {
    marginHorizontal: metrics.baseMargin * 2,
  },
  inputEnabled: {
    backgroundColor: colors.white,
  },
  inputDisabled: {
    backgroundColor: colors.lighter,
  },
  placeholder: {
    color: colors.light,
  },
  description: {
    height: 150,
    textAlign: 'left',
    textAlignVertical: 'top',
  },
  street: {
    flex: 1,
    marginLeft: metrics.baseMargin * 2,
  },
  number: {
    flex: 1,
    marginLeft: metrics.baseMargin,
    marginRight: metrics.baseMargin * 2,
    maxWidth: 70,
  },
  address: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  containerAction: {
    flexDirection: 'row',
    alignItems: 'baseline',
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: metrics.baseMargin * 2,
    borderRadius: metrics.baseRadius * 10,
    paddingVertical: metrics.basePadding,
    paddingHorizontal: metrics.basePadding * 2,
  },
  bold: {
    fontWeight: 'bold',
  },
  text: {
    fontSize: 14,
    textAlign: 'center',
  },
  textEnabled: {
    color: colors.white,
  },
  textDisabled: {
    color: colors.lighter,
  },
  buttonIcon: {
    marginRight: metrics.baseMargin,
    marginLeft: metrics.baseMargin * 2,
  },
  buttonEnabled: {
    backgroundColor: colors.secondary,
  },
  buttonDisabled: {
    backgroundColor: colors.tertiary,
  },
});

export default styles;
