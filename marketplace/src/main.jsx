import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Img_logo from './assets/image.png'
import App from './App.jsx'
import {PrivyProvider} from '@privy-io/react-auth';
import ReactDOM from 'react-dom/client';

import '@rainbow-me/rainbowkit/styles.css';
import {
  getDefaultConfig,
  RainbowKitProvider,
} from '@rainbow-me/rainbowkit';
import { WagmiProvider } from 'wagmi';
import {
  mainnet,
  polygon,
  optimism,
  arbitrum,
  base,
} from 'wagmi/chains';
import {
  QueryClientProvider,
  QueryClient,
} from "@tanstack/react-query";


const config = getDefaultConfig({
  appName: 'My RainbowKit App',
  projectId: 'YOUR_PROJECT_ID',
  chains: [mainnet, polygon, optimism, arbitrum, base],
  ssr: true, // If your dApp uses server side rendering (SSR)
});

const queryClient = new QueryClient();
createRoot(document.getElementById('root')).render(
  <StrictMode>
   <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider>

    <App />
        </RainbowKitProvider>
        </QueryClientProvider>
        </WagmiProvider>
  </StrictMode>
)
