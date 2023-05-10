import Layout from "@/components/Layout";
import Link from "next/link";
export default function Menu(){
     return (
       <Layout>
         <div className="bg-card p-6 w-50 rounded-lg">
         <Link href={"/products/new"} className="flex">
           <svg
             xmlns="http://www.w3.org/2000/svg"
             viewBox="0 0 20 20"
             fill="white"
             class="w-10 h-10"
           >
             <path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z" />
           </svg>
         </Link>
         </div>
       </Layout>
     );
}