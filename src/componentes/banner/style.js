import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  containerBanner: {
    width: "100%",
    alignItems: "center",
    marginTop: 18,
    marginBottom: 10,
  },
  textBanner: {
    fontSize: 24,
    fontWeight: "700",
    color: "gray",
    textAlign: "center",
    marginBottom: 12,
    letterSpacing: 1.2,
    textShadowColor: "#eaf1fb",
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 6,
  },
  imageBanner: {
    width: "96%",
    height: 180,
    borderRadius: 24,
    backgroundColor: "#eaf1fb",
    borderWidth: 2,
    borderColor: "#dbeafe",
    alignSelf: "center",
    marginBottom: 12,
    resizeMode: "cover",
    shadowColor: "#2563a6",
    shadowOpacity: 0.13,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 4 },
  },
});

export default styles;