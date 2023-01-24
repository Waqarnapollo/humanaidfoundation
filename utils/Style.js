import { StyleSheet, Dimensions } from "react-native";

export const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#3D476A",
    alignItems: "center",
    justifyContent: "center",
  },
  Container: {
    flex: 1,
  },
  Logo: {
    width: Dimensions.get("window").width * 0.8,
    height: 100,
    resizeMode: "contain",
  },
  HomeText: {
    width: Dimensions.get("window").width * 0.8,
    color: "#fff",
    fontSize: 36,
    fontWeight: "bold",
    textAlign: "center",
  },
  DonateBtn: {
    width: Dimensions.get("window").width * 0.75,
    marginTop: 40,
    backgroundColor: "#252e4d",
    paddingVertical: 10,
    borderWidth: 2,
    borderColor: "#dbdbdb",
    borderRadius: 50,
  },
  DonateBtnText: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 14,
  },
  AppealBg: {
    width: "100%",
    backgroundColor: "#fff",
    paddingVertical: 20,
  },
});
