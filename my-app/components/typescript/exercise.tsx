
'use client'

import { useState } from "react"

type HomeProps = {
  name: string,
  age: number,
}

export default function Exercise({ name, age }: HomeProps) {

  return (

    <>
      <h1> {name} </h1>
      < p> {age}  </p>

    </>

  )


}