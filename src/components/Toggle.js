import React from 'react'
import Switch from '@mui/material/Switch';

const getStorageTheme = () => {
  let theme = 'light-theme';
  if (sessionStorage.getItem('theme')) {
      theme = sessionStorage.getItem('theme');
  }
  return theme;
}

const Toggle = () => {
  const [theme,setTheme]=React.useState(getStorageTheme())

  const toggleTheme=()=>{
    if(theme==='light-theme'){
      setTheme('dark-theme')
    }else{
      setTheme('light-theme')
    }
  }
  React.useEffect(()=>{
    document.documentElement.className = theme
    localStorage.setItem('theme', theme);
  },[theme])
  return (
    <nav>
      <div className='nav-center'>
        <h1>Code Fraternity Dark and Light Mode Project</h1>
        <button className='btn' onClick ={toggleTheme}><Switch color="warning" /></button>
      </div>
    </nav>
  )
}

export default Toggle
