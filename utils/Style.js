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
    height: 150,
    resizeMode: "contain",
    marginBottom: 20,
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
  AppealsBg: {
    width: "100%",
    backgroundColor: "#fff",
    marginVertical: 10,
    width: Dimensions.get("window").width * 1,
  },
  Cause: {
    display: "flex",
    flexDirection: "row",
    width: Dimensions.get("window").width * 1,
    padding: 10,
  },
  AppealsImg: {
    width: 100,
    height: 100,
    marginRight: 10,
    borderRadius: 10,
  },
  Content: {
    flex: 1,
    flexDirection: "column",
  },
  AppealsTitle: {
    flexWrap: "wrap",
    fontSize: 16,
    fontWeight: "bold",
  },
  AppealsDescription: {
    flexWrap: "wrap",
    fontSize: 14,
  },
  AppealContainer: {
    flex: 1,
    margin: 10,
  },
  AppealImg: {
    width: "100%",
    height: 250,
    borderRadius: 10,
  },
  AppealTitle: {
    fontSize: 24,
    fontWeight: "bold",
    paddingVertical: 10,
  },
  ProgressBar: {
    marginBottom: 10,
  },
});
