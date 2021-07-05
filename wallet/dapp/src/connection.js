import React from 'react'
import { useWallet, UseWalletProvider } from 'use-wallet'

function Connection(){
    const wallet=useWallet()
    const connectwallet =async(e)=>{
        e.preventDefault()
        await wallet.connect()
    }
    return(
        <div>
            <button onClick={connectwallet}>connectwallet</button>
        </div>
    )
}

// Wrap everything in <UseWalletProvider />
export default () => (
    <UseWalletProvider
      chainId={1337}
      connectors={{
        // This is how connectors get configured
        provided: { provided: window.cleanEthereum },
      }}
    >
      <App />
      <Connection/>
    </UseWalletProvider>
  )