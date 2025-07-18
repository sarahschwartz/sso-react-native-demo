import type { AccountInfo, DeployedAccount } from '@/types/types';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ActionButton, { ButtonStyle } from './ui/ActionButton';
import { createPasskey } from '@/utils/account';

interface PasskeyCreationViewProps {
    accountInfo: AccountInfo;
    onDeployed: (account: DeployedAccount) => void;
}

const PasskeyCreationView: React.FC<PasskeyCreationViewProps> = ({
    accountInfo,
    onDeployed
}) => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleCreatePasskey = async () => {
        setIsLoading(true);
        setError(null);

        try {
            const deployedAccount = await createPasskey(accountInfo);
            onDeployed(deployedAccount);
        } catch (err) {
            console.log('Error creating passkey:', err);
            setError(err instanceof Error ? err.message : 'Failed to create passkey');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <View style={styles.container}>
            <ActionButton
                title="Create Passkey"
                progressTitle="Creating Passkey..."
                icon="key.fill"
                isLoading={isLoading}
                style={ButtonStyle.Prominent}
                action={handleCreatePasskey}
            />

            {error && (
                <Text style={styles.errorText}>{error}</Text>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 16,
    },
    errorText: {
        color: 'red',
        marginTop: 12,
        textAlign: 'center',
    }
});

export default PasskeyCreationView; 