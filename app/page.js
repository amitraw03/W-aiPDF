"use client";
import { Button } from "@/components/ui/button";
import { api } from "@/convex/_generated/api";
import { UserButton, useUser } from "@clerk/nextjs";
import { useMutation } from "convex/react";
import Image from "next/image";
import { useEffect } from "react";

export default function Home() {
  const {user} = useUser();    // data collected in clerk auth
  const createUser = useMutation(api.user.createUser);   // convex function reference

  useEffect(()=>{
     user&&checkUser();
  },[user])
  
  // component checkUer to create/check user in db by calling convex function (createUser) & passing args from clerk collected data
  const checkUser = async () => {
     const result = await createUser({
        email: user?.primaryEmailAddress?.emailAddress,
        userName: user?.fullName,
        imageUrl: user?.imageUrl
     });
     console.log(result);
  }

  return (
    <div>
      <h1> Yo Whatsupp!!</h1>
      <Button> CONTACT </Button>

      <UserButton showName/>
    </div>
  );
}
