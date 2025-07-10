// import { Platform } from 'react-native';
import { type Config } from 'react-native-zksync-sso';

/**
 * Loads configuration from a JSON file bundled with the app
 * Automatically handles localhost URLs for Android emulator by replacing with 10.0.2.2
 * @returns Configuration object with platform-specific URL adjustments
 */
export const loadConfig = (): Config => {
    // const config: Config = require('../../config.json');
    // console.log('Successfully loaded config from bundled JSON');

    // // Handle localhost URLs for Android emulator
    // if (Platform.OS === 'android' && config.nodeUrl.includes('localhost')) {
    //     const originalUrl = config.nodeUrl;
    //     config.nodeUrl = config.nodeUrl.replace('localhost', '10.0.2.2');
    //     console.log(`Android: Replaced localhost URL "${originalUrl}" with "${config.nodeUrl}"`);
    // } else {
    //     console.log(`${Platform.OS}: Using original nodeUrl "${config.nodeUrl}"`);
    // }

    const config: Config = {
        // Sepolia testnet contracts
        contracts: {
            session: "0x64Fa4b6fCF655024e6d540E0dFcA4142107D4fBC",
            passkey: "0x006ecc2D79242F1986b7cb5F636d6E3f499f1026",
            accountFactory: "0xd122999B15081d90b175C81B8a4a9bE3327C0c2a",
            accountPaymaster: "0x4Cb1C15710366b73f3D31EC2b3092d5f3BFD8504",
            recovery: "0x6AA83E35439D71F28273Df396BC7768dbaA9849D"
        },
        nodeUrl: 'https://sepolia.era.zksync.dev',
        // TODO: fix or remove this
        deployWallet: {
            privateKeyHex: "2544c43e10c09cd9bc1ecd30b931545eaf08b01811156714cae8062cbaaa0186"
        }
    };

    return config;
};