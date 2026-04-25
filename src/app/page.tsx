import { Button } from "@/components/ui/button";

const Page = () => {
  const something = true;

  return (    
    <div className="min-h-screen min-w-screen flex items-center justify-center">
      {/* <h1>Welcome to the Home Page</h1>
      <p>This is the main landing page of the application.</p> */}
      <Button>Click me</Button>
    </div>
  )
}

export default Page