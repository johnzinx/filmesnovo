import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  viewHeader: {
    width: "100%",
    height: 70,
    backgroundColor: "gray",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 18,
    paddingHorizontal: 16,
    elevation: 6,
    shadowColor: "#3887fe",
    shadowOpacity: 0.18,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
  },
  textHeader: {
    flex: 1,
    color: "#fff",
    fontSize: 26,
    fontWeight: "bold",
    letterSpacing: 2,
    textAlign: "center",
    textShadowColor: "#2563a6",
    textShadowOffset: { width: 1, height: 2 },
    textShadowRadius: 4,
  },
});

export default styles;