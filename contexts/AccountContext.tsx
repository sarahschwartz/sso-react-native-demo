import { AccountDetails } from '@/types/types';
import React, {
  createContext,
  ReactNode,
  useContext,
  useState,
} from 'react';

interface AccountContextType {
  accountDetails: AccountDetails | null;
  setAccountDetails: (a: AccountDetails | null) => void;
}

const AccountContext = createContext<AccountContextType | undefined>(undefined);

export function AccountProvider({ children }: { children: ReactNode }) {
  const [accountDetails, setAccountDetails] = useState<AccountDetails | null>(null);

  return (
    <AccountContext.Provider
      value={{
        accountDetails,
        setAccountDetails
      }}
    >
      {children}
    </AccountContext.Provider>
  );
}

export function useAccount() {
  const context = useContext(AccountContext);
  if (context === undefined) {
    throw new Error('useAccount must be used within an AccountProvider');
  }
  return context;
}
