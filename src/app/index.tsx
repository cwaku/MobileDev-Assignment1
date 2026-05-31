import { SafeAreaView, StyleSheet } from "react-native";

export default function Index() {
  return <SafeAreaView style={styles.container} />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
