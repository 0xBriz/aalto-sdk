import { Network } from './network';
import { BalancerNetworkConfig } from '@/types';

export const balancerVault = '0x3B415b38f1c2aE9Af2D1e04F30188AD7dE883B7a';

export const BALANCER_NETWORK_CONFIG: Record<Network, BalancerNetworkConfig> = {
  [Network.BSC]: {
    chainId: Network.BSC, // 56
    addresses: {
      contracts: {
        vault: '',
        multicall: '',
      },
      tokens: {
        wrappedNativeAsset: '',
      },
    },
    urls: {
      subgraph: '',
    },
    pools: {},
  },
  [Network.HARDHAT]: {
    chainId: Network.HARDHAT, // 31337
    addresses: {
      contracts: {
        vault: '0x3B415b38f1c2aE9Af2D1e04F30188AD7dE883B7a',
        multicall: '',
      },
      tokens: {
        wrappedNativeAsset: '',
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
