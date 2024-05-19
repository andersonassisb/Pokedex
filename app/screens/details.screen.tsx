import React from "react";
import { StyleSheet, View } from "react-native";

interface Props {
  testID?: string;
}

const DetailsScreen: React.FC<Props> = ({ testID = 'DetailsScreen' }) => {
  return <View testID={testID} style={styles.container} />;
}

export default DetailsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
});