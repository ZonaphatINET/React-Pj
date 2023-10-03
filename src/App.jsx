import React from 'react';

function App() {
  const [authorized, setAuthorized] = React.useState(false)

  function login() {
    setTimeout(() => {
      setAuthorized(true)
    }, 3072);
  }

React.useEffect(() => {
  login();
},[]);

if (!authorized) {
  return (
    <>
      <h1>คุณไม่ได้รับอนุญาตให้เข้าหน้าเว็บไซต์นี้</h1>  
    </>
  );
}

  return (
    <>
      <h1>คุณได้รับอนุญาตให้เข้าหน้าเว็บไซต์นี้</h1> 
   </>
  )
}

export default App;
