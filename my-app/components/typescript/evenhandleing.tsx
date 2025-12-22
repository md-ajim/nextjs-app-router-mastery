"use clinet";

import { useState } from "react";

export default function EeventHandling() {

  interface User{
    name : string,
    age : number,
    email : string,
    password: string
  }

  const [ form , setForm] = useState<User>({
    name: '',
    age : 0,
    email: '',
    password : ''
  })



  return (
    <>
    
    
    </>
  )
}
