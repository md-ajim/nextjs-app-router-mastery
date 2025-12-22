"use clinet";
import { Button } from "../ui/button";
import { 
  Card ,
  CardAction,
  CardContent,
  CardDescription,
  CardTitle,
  CardHeader,
  CardFooter



} from "../ui/card";
import { Input } from "../ui/input";
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



  return <>

        <Card>

          
        </Card>
  


  </>;
}
