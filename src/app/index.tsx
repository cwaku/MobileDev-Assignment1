import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";

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

function Stat({ number, label }: { number: string; label: string }) {
  return (
    <View style={styles.statItem}>
      <Text style={styles.statNumber}>{number}</Text>
      <Text style={styles.statLabel}>{label}</Text>
    </View>
  );
}

function ProfileStats() {
  return (
    <View style={styles.profileSection}>
      <View style={styles.profileRow}>
        <LinearGradient
          colors={["#feda75", "#d62976", "#962fbf"]}
          start={{ x: 0, y: 1 }}
          end={{ x: 1, y: 0 }}
          style={styles.avatarRing}
        >
          <View style={styles.avatarInner}>
            <Text style={styles.avatarText}>OOTD</Text>
          </View>
        </LinearGradient>
        <View style={styles.stats}>
          <Stat number="53" label="Posts" />
          <Stat number="12" label="Members" />
          <Stat number="1" label="Admins" />
        </View>
      </View>

      <View style={styles.bio}>
        <Text style={styles.bioTitle}>OOTD Everyday</Text>
        <Text style={styles.bioText}>Fit check! 🧊</Text>
        <Text style={styles.bioText}>You know we&apos;ll hype you up.</Text>
      </View>

      <View style={styles.memberButton}>
        <Text style={styles.memberButtonText}>Member </Text>
        <Ionicons name="chevron-down" size={16} color="#000" />
      </View>
    </View>
  );
}

export default function Index() {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <ScrollView showsVerticalScrollIndicator={false}>
        <ProfileStats />
      </ScrollView>
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
  profileSection: {
    paddingHorizontal: 16,
  },
  profileRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  avatarRing: {
    width: 88,
    height: 88,
    borderRadius: 44,
    alignItems: "center",
    justifyContent: "center",
  },
  avatarInner: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: "#1f9bd1",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 3,
    borderColor: "#fff",
  },
  avatarText: {
    color: "#fff",
    fontWeight: "800",
    fontSize: 22,
    letterSpacing: 1,
  },
  stats: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    marginLeft: 8,
  },
  statItem: {
    alignItems: "center",
  },
  statNumber: {
    fontSize: 18,
    fontWeight: "700",
    color: "#000",
  },
  statLabel: {
    fontSize: 13,
    color: "#000",
  },
  bio: {
    marginTop: 12,
  },
  bioTitle: {
    fontWeight: "700",
    fontSize: 14,
    color: "#000",
  },
  bioText: {
    fontSize: 14,
    color: "#000",
    lineHeight: 19,
  },
  memberButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 14,
    paddingVertical: 8,
    borderWidth: 1,
    borderColor: "#dbdbdb",
    borderRadius: 8,
  },
  memberButtonText: {
    fontWeight: "600",
    fontSize: 14,
    color: "#000",
  },
});
