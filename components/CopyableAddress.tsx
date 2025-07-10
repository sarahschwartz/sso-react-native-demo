import React from 'react';
import { Text, Pressable, StyleSheet } from 'react-native';
import * as Clipboard from 'expo-clipboard';
import Toast from 'react-native-toast-message';

interface Props {
  value: string;
}

export default function CopyableAddress({ value }: Props) {
  const handleCopy = async () => {
    await Clipboard.setStringAsync(value);

  Toast.show({
        type: 'success',
        text1: 'Copied Address',
    });
    };

  return (
    <Pressable onLongPress={handleCopy}>
      <Text style={styles.sectionTitle}>{value}</Text>
    </Pressable>
  );
}



const styles = StyleSheet.create({
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#111827',
    fontFamily: 'Inter_600SemiBold',
  }
});