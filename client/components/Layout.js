import Nav from "@/components/Nav";
import { useSession, signIn, signOut } from "next-auth/react"

export default function Layout({children}) {
  const {data:session}=useSession()
  console.log(session)
  if(!session){
    return (
      <div className="bg-back  w-screen h-screen flex items-center">
        <div className="text-center w-full">
          <button className="bg-white p-2 rounded-full  px-4" onClick={()=>signIn('google')}>Login with Google</button>
        </div>
      </div>
    );  
  }
  return (
    <>
      <div className="bg-back  min-h-screen flex">
        <Nav />
        <div className="bg-white flex-grow mt-1 mr-2 rounded-lg p-4 mb-2">
         {children} <br />
        </div>

        {/* <div className="text-center w-full">
          <button
            className="bg-white p-2 rounded-lg px-4"
            onClick={() => signOut()}
          >
            Sign Out
          </button>
        </div> */}
      </div>
    </>
  );
}
