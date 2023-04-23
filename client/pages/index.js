import { useSession, signIn, signOut } from "next-auth/react"

export default function Home() {
  const {data:session}=useSession()
  console.log(session)
  if(session){
  return(
  <>

    Signed in as {session.user.email} <br/>
    <div className="text-center w-full">
      <button className="bg-white p-2 rounded-lg px-4" onClick={()=>signOut()}>Sign Out</button>
  </div>
</>
  )
  }
  return (
    <div className="bg-blue-900  w-screen h-screen flex items-center">
      <div className="text-center w-full">
        <button className="bg-white p-2 rounded-lg px-4" onClick={()=>signIn('google')}>Login with Google</button>
      </div>
    </div>
  );
}
