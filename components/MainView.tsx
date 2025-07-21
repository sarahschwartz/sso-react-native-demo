import { router } from "expo-router";
import React, { useEffect } from "react";
import { StyleSheet, View } from "react-native";
import { RpId } from "react-native-zksync-sso";
import LoggedOutView from "./LoggedOutView";
import { useAccount } from "@/contexts/AccountContext";

interface MainViewProps {
  rpId: RpId;
}

const MainView: React.FC<MainViewProps> = ({ rpId }) => {
  const { accountDetails, setAccountDetails } = useAccount();

  useEffect(() => {
    if (accountDetails) router.replace("/(account)/(tabs)");
  }, [accountDetails]);

  return (
    <View style={styles.navigationContainer}>
      {!accountDetails && (
        <LoggedOutView
          accountInfo={{
            name: accountName,
            userID: accountUserID,
            rpId,
          }}
          onAccountCreated={(account) => {
            setAccountDetails(account);
          }}
          onSignedIn={(account) => {
            setAccountDetails(account);
          }}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  navigationContainer: {
    flex: 1,
    width: "100%",
  },
});

export default MainView;
