import React, { useState, useEffect } from 'react';
import './App.css';
import {getBitcoinPrice} from './api/Bitcoin';
import '@ionic/core/css/core.css';
import '@ionic/core/css/ionic.bundle.css';
import {
  IonApp,
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonIcon
} from '@ionic/react';
import LoadingCard from './components/LoadingCard/LoadingCard';
import BitcoinCard from './components/BitcoinCard/BitcoinCard';
import { Icon } from '@iconify/react';
import logoBitcoin from '@iconify/icons-ion/logo-bitcoin';



function App() {
  const [loading, setLoading] = useState(true);
  const [bitcoinInfo, setBitcoinInfo]= useState({});

  async function fetchData() {
    const bitcoinInfo = await getBitcoinPrice();
    setBitcoinInfo(bitcoinInfo);
    setLoading(false);
  }

  const createLoadingCards = () => {
    return (
      <>
        <LoadingCard/>
        <LoadingCard/>
        <LoadingCard/>
      </>
    )
  }

  const createBitcoinCard =(bitcoinInfo) => {
    return Object.keys(bitcoinInfo.bpi).map(
      (item, index) => <BitcoinCard key={index} data={bitcoinInfo.bpi[item]} />
    )
  }
  useEffect(()=> {
    fetchData();
  }, [])

  return (
   <IonApp>
     <IonHeader>
       <IonToolbar color="primary">
         <IonTitle>Bitcoin Price Tracker</IonTitle>
       </IonToolbar>
     </IonHeader>
     <IonContent>
       {/* <IonIcon icon={logo_bitcoin} className="bitcoin__logo"/> */}
       <Icon className="bitcoin__logo" icon={logoBitcoin} />
       {loading ? createLoadingCards() : createBitcoinCard(bitcoinInfo)}
       <section className='disclaimer'>
          <p>{bitcoinInfo.disclaimer}</p>
       </section>
     </IonContent>
   </IonApp>
  );
}

export default App;