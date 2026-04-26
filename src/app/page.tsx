"use client"

import { Button } from "@/components/ui/button";
import { useEffect } from "react";

const Page = () => {
  useEffect (() => {
    console.log("Page component mounted");
  }, []);

  return (    
    <div className="min-h-screen min-w-screen flex items-center justify-center">
      {/* <h1>Welcome to the Home Page</h1>
      <p>This is the main landing page of the application.</p> */}
      <Button>Click me</Button>
    </div>
  )
}

export default Page