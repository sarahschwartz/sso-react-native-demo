import * as Clipboard from 'expo-clipboard';
import { Copy } from 'lucide-react-native';
import React from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';
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
    <Pressable onLongPress={handleCopy} style={styles.container}>
      <Copy size={12} />
      <Text style={styles.sectionTitle}>{value}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
    gap: 2
  },
  sectionTitle: {
    fontSize: 12,
    fontWeight: '600',
    color: '#111827',
    fontFamily: 'Inter_600SemiBold',
  }
});