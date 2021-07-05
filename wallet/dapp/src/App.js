import React,{useState,useEffect} from 'react';
import getWeb3 from './getWeb3';
import connection from './connection';

const App=()=>{
  const [web3,setWeb3]=useState(undefined)
  const [accountsaw,setAccount]=useState(undefined)
  const [contract,setContract]=useState(undefined)

useEffect(() => {
  const init =async()=>{
  //get net work provider and web3 instance.
  const web3= await getWeb3();
  //use web3 to get user acc
  const account=await web3.eth.getAccounts();
  //get the contract instance
  const networkId= await web3.eth.net.getId();
  const deployedNetwork= simplestorageContract.networks[networkId];
  const instance=new web3.eth.Contract(
    simplestorageContract.abi,deployedNetwork &&deployedNetwork.address,
);


setWeb3(web3)
setAccount(account)
setContract(contract)
}
init()
},[])
return(
  <div className='App'>
  <h1>hi</h1>
  <Connection/>
    
  </div>
)
}
export default App




