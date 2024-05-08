import React from "react";
import { Platform, SafeAreaView, StyleSheet, Text, View } from "react-native";

const Home = (): React.JSX.Element => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text>Hello World devProfile</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    marginTop: Platform.OS === "android" ? 22 : 0,
  },
  container: {
    flex: 1,
  },
});

export default Home;
