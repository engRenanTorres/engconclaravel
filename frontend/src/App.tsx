/* eslint-disable react/react-in-jsx-scope */
import { UserIcon } from '@heroicons/react/20/solid';
import './App.css';
import Login from './containers/Login';
import { useEffect, useState } from 'react';

function App() {
  const [theme, setTheme] = useState<'dark'| 'light' | null>(null);

  useEffect(()=>{
    if(window.matchMedia('(prefers-color-scheme: dark)').matches){
      setTheme('dark');
    }
    else {
      setTheme('light');
    }
  },[]);
  useEffect(()=>{
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  },[theme]);

  const handleTheme = () => {
    setTheme(theme === 'dark' ? 'light': 'dark');
  }

  return (
    <div className='bg-purple-50 dark:bg-black'>
      <UserIcon className='w-4'/>
      <button className='bg-green-500 p-4 rounded-3x1' onClick={()=> handleTheme()}>
        Dark Mode
      </button>
      <Login/>
    </div>
  )
}

export default App
