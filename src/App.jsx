import { useState } from 'react';
import './App.css';

function App() {
  const [amount, setAmount] = useState(0)
  const [from, setFrom] = useState('usd')
  const [to, setTo] = useState('inr')
  const [convertedAmount, setConvertedAmount] = useState(0)

  return (
    <div className='w-full h-screen flex flex-wrap
    justify-center items-center bg-cover bg-no-repeat
    bg-gradient-to-tr from-blue-200 via-blue-300 to-blue-400'>
      <h1></h1>
    </div>
  )
}

export default App;