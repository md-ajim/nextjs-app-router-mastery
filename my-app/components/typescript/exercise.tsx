
'use client'

import { useState } from "react"

type HomeProps = {
  name: string,
  age: number,
}

export default function Exercise({ name, age }: HomeProps) {
  
  type User ={
    name : string,
    age : number,
    isDeveloper :  boolean
  }

  const [ count , setCount] = useState<number>(0)
  const [ names , setNames] = useState< string>('')
  const [ user , setUser] = useState<User>({name: '' ,age : 0 , isDeveloper : true})

  return (

    <>
      <h1> {name} </h1>
      < p> {age}  </p>

    </>

  )


}