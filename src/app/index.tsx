import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";

function Header() {
  return (
    <View style={styles.header}>
      <Ionicons name="chevron-back" size={26} color="#000" />
      <View style={styles.headerTitleWrap}>
        <Text style={styles.headerTitle}>Group Profile</Text>
        <Text style={styles.headerSubtitle}>ootd_everyday</Text>
      </View>
      <View style={styles.plusBox}>
        <Ionicons name="add" size={24} color="#000" />
      </View>
    </View>
  );
}

export default function Index() {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 14,
    paddingVertical: 10,
  },
  headerTitleWrap: {
    alignItems: "center",
  },
  headerTitle: {
    fontSize: 17,
    fontWeight: "700",
    color: "#000",
  },
  headerSubtitle: {
    fontSize: 12,
    color: "#8e8e8e",
  },
  plusBox: {
    width: 32,
    height: 32,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#dbdbdb",
    alignItems: "center",
    justifyContent: "center",
  },
});
