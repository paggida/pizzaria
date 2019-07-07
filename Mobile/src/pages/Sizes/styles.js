import { StyleSheet } from 'react-native';
import { metrics } from '~/styles';

export const styles = StyleSheet.create({
  background: {
    position: 'absolute',
  },
  columnWrapper: {
    marginHorizontal: metrics.baseMargin,
    justifyContent: 'space-between',
  },
});

export default styles;
