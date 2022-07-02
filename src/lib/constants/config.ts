import { Network } from './network';
import { BalancerNetworkConfig } from '@/types';

export const balancerVault = '0xc37c34eA9CA579aDF279A16C547e801ed722F3b5';

export const BALANCER_NETWORK_CONFIG: Record<Network, BalancerNetworkConfig> = {
  [Network.BSC]: {
    chainId: Network.BSC, // 56
    addresses: {
      contracts: {
        vault: '0xc37c34eA9CA579aDF279A16C547e801ed722F3b5',
        multicall: '',
      },
      tokens: {
        wrappedNativeAsset: '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c',
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
        wrappedNativeAsset: '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c',
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
