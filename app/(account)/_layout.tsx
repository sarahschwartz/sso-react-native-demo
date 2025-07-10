import { TxnProvider } from '@/contexts/TxnContext';
import { Slot } from 'expo-router';
import Toast from 'react-native-toast-message';

export default function WithProviderLayout() {
  return (
    <TxnProvider>
      <Slot />
      <Toast />
    </TxnProvider>
  );
}
