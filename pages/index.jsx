
import { CookiesProvider } from 'react-cookie';
import { getCookie } from 'cookies-next';
import Link from 'next/link'
import Footer from "@/components/Footer";
import HeroSection from "@/components/Hero";
import NavbarApp from "@/components/Navbar";
import {NextUIProvider} from "@nextui-org/react";
import Who from "@/components/Who";
import ClientForm from './Client';
import NewApp from './new';

export default function Home({username, users} ) {



  return (
    <NextUIProvider className='bg-gray-300'>
      
       <NavbarApp username={username}/>
       
       <HeroSection />
       <br/>
       <Who/>
       {/* <ClientForm /> */}
       <h1></h1>
       <h2 className=" text-[24px] text-center p-5 font-bold uppercase mb-7 text-transparent bg-clip-text 
       bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
              Popular Talents
            </h2>
<NewApp/>



       <Footer/>
    </NextUIProvider>
  )

  
}



export async function getServerSideProps(context) {
  const req = context.req
  const res = context.res
  var username = getCookie('username', { req, res });
  if (username == undefined){
      username = false;
  }
  return { props: {username} };
};






// import Layout from '../components/layout'
// import { getCookie } from 'cookies-next';
// import Link from 'next/link'
// import HeroSection from '../components/Hero';
// // import NavbarApp from '../components/Navbar';
// // import '../styles/global.css';
// export default function HomePage( {username} ) {
//     return (
//         <Layout pageTitle="Home">

            
//         <h1 className="text-3xl font-bold underline text-cyan-400">Hello, Next.js!</h1>
//             <HeroSection/>
//         {username ?
//         <>
    
//             <h2>Hi {username}</h2>
//             <Link href="/profile">Profile</Link><br/>
//             <Link href="/api/logout">Logout</Link>
//         </>: 
//         <>
//             <h2>Log in</h2>
//             <Link href="/login">Login</Link><br/>
//             <Link href="/signup">Signup</Link>
//         </>
//         }
//         </Layout>
//     );
// }

// export async function getServerSideProps(context) {
//     const req = context.req
//     const res = context.res
//     var username = getCookie('username', { req, res });
//     if (username == undefined){
//         username = false;
//     }
//     return { props: {username} };
// };

