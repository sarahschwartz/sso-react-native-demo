import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { StyleSheet, ViewStyle } from 'react-native';

interface GradientBackgroundProps {
  children: React.ReactNode;
  style?: ViewStyle;
}

export function GradientBackground({ children, style }: GradientBackgroundProps) {
  return (
    <LinearGradient
      colors={['#0F172A', '#1E293B', '#334155']}
      style={[styles.gradient, style]}
    >
      {children}
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
  },
});