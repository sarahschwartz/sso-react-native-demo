import MainView from '@/components/MainView';
import React from 'react';
import { StyleSheet, View } from 'react-native';

export default function App() {
  return (
      <View style={styles.container}>
        <MainView/>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  },
});
