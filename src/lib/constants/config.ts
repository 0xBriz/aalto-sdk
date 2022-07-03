import { Network } from './network';
import { BalancerNetworkConfig } from '@/types';
import { WBNB_ADDRESS } from '@/data/bsc/token-addresses';
import {
  MULTICALL_ADDRESS_BSC,
  VAULT_ADDRESS_BSC,
} from '@/data/bsc/contract-addresses';

export const balancerVault = VAULT_ADDRESS_BSC;

export const BALANCER_NETWORK_CONFIG: Record<Network, BalancerNetworkConfig> = {
  [Network.BSC]: {
    chainId: Network.BSC, // 56
    addresses: {
      contracts: {
        vault: VAULT_ADDRESS_BSC,
        multicall: MULTICALL_ADDRESS_BSC,
      },
      tokens: {
        wrappedNativeAsset: WBNB_ADDRESS,
      },
    },
    urls: {
      subgraph: '',
    },
    pools: {},
  },
};

export const networkAddresses = (
  chainId: number
): BalancerNetworkConfig['addresses'] =>
  BALANCER_NETWORK_CONFIG[chainId as Network].addresses;
