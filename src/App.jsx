import { useEffect, useState } from 'react'


import { fetchDataFromApi } from './utils/app'

function App() {
   useEffect(()=>{
apiTesting();
   },[]);
   const apiTesting=()=>{
    fetchDataFromApi("/movie/popular").then((res)=>{
      console.log(res);
    })
   }

  return (
    <>
      app 
       
    </>
  )
}

export default App
