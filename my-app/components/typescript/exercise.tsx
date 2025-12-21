
'use client'

import { useState } from "react"

type HomeProps = {
  name: string,
  age: number,
}

export default function Exercise({ name, age }: HomeProps) {

  const [ count , setCount] = useState<number>(0)

  return (

    <>
      <h1> {name} </h1>
      < p> {age}  </p>

    </>

  )


}