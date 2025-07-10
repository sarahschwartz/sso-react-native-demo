import MainView from '@/components/MainView';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import sdk from 'react-native-zksync-sso';

export default function App() {
  const rpId = sdk.utils.createRpId(
    "soo-sdk-example-pages.pages.dev", // RP ID (same for both platforms)
    "android:apk-key-hash:-sYXRdwJA3hvue3mKpYrOZ9zSPC7b4mbgzJmdZEDO5w" // Android origin
  );

  return (
      <View style={styles.container}>
        <MainView rpId={rpId} />
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  },
});
