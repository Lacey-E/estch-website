
import React, { useState, useEffect } from 'react';

function ExternalApiFetch() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.example.com/data');
        if (response.ok) {
          const json = await response.json();
          setData(json);
        } else {
          console.error('Failed to fetch data');
        }
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchData();
  }, []);

  if (!data) return <div>Loading...</div>;

  return (
    <div>
      {/* Display the data */}
    </div>
  );
}

export default ExternalApiFetch;


// "use client"
// import { CookiesProvider } from 'react-cookie';
// import { getCookie } from 'cookies-next';
// import Link from 'next/link'
// import Footer from "@/components/Footer";
// import HeroSection from "@/components/Hero";
// import NavbarApp from "@/components/Navbar";
// import {NextUIProvider} from "@nextui-org/react";
// import Who from "@/components/Who";
// export default function Home({username} ) {
//   return (
//     <NextUIProvider>
      
//        <NavbarApp username={username}/>
       
//        <HeroSection/>
//        <br/>
//        <Who/>
//        <Footer/>
//     </NextUIProvider>
//   )

  
// }
// export async function getServerSideProps(context) {
//   const req = context.req
//   const res = context.res
//   var username = getCookie('username', { req, res });
//   if (username == undefined){
//       username = false;
//   }
//   return { props: {username} };
// };
