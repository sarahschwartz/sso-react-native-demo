import { AccountProvider } from '@/contexts/AccountContext';
import { Slot } from 'expo-router';

export default function Layout() {
  return (
      <AccountProvider>
        <Slot />
      </AccountProvider>
  );
}
