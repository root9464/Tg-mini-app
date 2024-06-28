import {useViewport} from '@tma.js/sdk-react';
import {useEffect} from 'react';
import './App.css';

export default function App() {
  const vp = useViewport();
  useEffect(() => {
    console.log(vp);
    vp?.expand();    
  }, [vp]);


  return (
    <div>
      <h1>Какой то текст 2</h1>
    </div>
  )
}


