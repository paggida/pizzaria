import { StyleSheet } from "react-native";
import { colors, metrics } from "~/styles";

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    alignItems: "center"
  },
  logo: {
    height: 72,
    width: 72,
    marginBottom: metrics.baseMargin * 3
  },
  input: {
    alignSelf: "stretch",
    borderWidth: 1,
    borderColor: colors.light,
    borderRadius: metrics.baseRadius * 2,
    marginBottom: metrics.baseMargin,
    marginHorizontal: metrics.baseMargin * 3,
    padding: metrics.basePadding,
    fontSize: 16,
    color: colors.regular,
    backgroundColor: colors.white
  },
  placeholder: {
    color: colors.light
  },
  containerSignIn: {
    flex: -1,
    flexDirection: "row"
  },
  buttonSignIn: {
    flex: 1,
    alignItems: "center",
    borderRadius: metrics.baseRadius * 2,
    marginTop: metrics.baseMargin,
    marginHorizontal: metrics.baseMargin * 3,
    padding: metrics.basePadding * 1.2,
    backgroundColor: colors.secondary
  },
  buttonSignUp: {
    marginTop: metrics.baseMargin * 3
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: colors.white
  },
  icon: {
    color: colors.white
  }
});

export default styles;
