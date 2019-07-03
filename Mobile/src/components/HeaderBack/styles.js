import { Platform, StyleSheet } from "react-native";
import { colors, metrics } from "~/styles";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    ...Platform.select({
      ios: {
        paddingTop: 20 + metrics.baseMargin * 3
      },
      android: {
        paddingTop: metrics.baseMargin * 3
      }
    })
  },
  containerTitle: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginRight: metrics.baseMargin * 2
  },
  buttonHistory: {
    marginHorizontal: metrics.baseMargin * 2
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: colors.white
  },
  icon: {
    color: colors.white
  }
});

export default styles;
