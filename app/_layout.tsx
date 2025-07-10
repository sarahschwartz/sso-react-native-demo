import { AccountProvider } from '@/contexts/AccountContext';
import { Slot } from 'expo-router';
import sdk from 'react-native-zksync-sso';

export default function Layout() {
    // // Initialize platform-specific logging before any SDK usage
    // optional
    // sdk.utils.initializePlatformLogger("io.jackpooley.MLSSOExampleRN");
  
  return (
      <AccountProvider>
        <Slot />
      </AccountProvider>
  );
}
