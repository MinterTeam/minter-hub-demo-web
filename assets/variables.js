export const MAINNET = 'mainnet';
export const TESTNET = 'testnet';
export const NETWORK = process.env.APP_ENV === MAINNET ? MAINNET : TESTNET;
export const BASE_TITLE_NETWORK = NETWORK === MAINNET ? '' : 'Testnet ';
export const COIN_NAME = NETWORK === MAINNET ? 'BIP' : 'MNT';
export const CHAIN_ID = NETWORK === MAINNET ? 1 : 2;
export const ETHERSCAN_HOST = NETWORK === MAINNET ? 'https://etherscan.io' : 'https://ropsten.etherscan.io';

export const BASE_TITLE_END = ' — Minter';
export const BASE_TITLE = BASE_TITLE_NETWORK + 'Hub demo' + BASE_TITLE_END;
export const BASE_DESCRIPTION = 'Transfer HUB from Minter network to Ethereum and back';

export const APP_BASE_URL =  process.env.APP_BASE_URL || '/';
export const EXPLORER_API_URL = process.env.APP_EXPLORER_API_URL;
export const EXPLORER_RTM_URL = process.env.APP_EXPLORER_RTM_URL;
export const EXPLORER_HOST = process.env.APP_EXPLORER_HOST;
export const GATE_API_URL = process.env.APP_GATE_API_URL;
