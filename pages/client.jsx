import Footer from '@/components/Footer';
import NavbarApp from '@/components/Navbar';
import Structure from '@/components/Structure';
import { getUsers } from '@/lib/users';
import {Card, CardHeader, CardBody, CardFooter} from "@nextui-org/react";

export async function getStaticProps() { 
  const users = await getUsers()
  

  console.log(users);
  return {
    props: {
    
      users
    },
  };
}


export default function ClientForm ({users, localData}) {
  return (


    <section className='bg-slate-100'>
<NavbarApp/>
<div className='p-8 m-5'>
  

  <h2 className="text-[24px] font-bold uppercase mb-7 text-black">Available Talent</h2>
 
  <ul className='gap-2 grid grid-cols-2 sm:grid-cols-4 '>
    
    {users && users.map(({ id, name, website, image }) => (
      // <p >{card.title}</p>
      <Card className='py-4'>
        
        <div   >
        

<li  key={id} className='p-2'>
<CardHeader className='pb-0 pt-2 px-4 flex-col items-start'>
<a href="" className='font-bold text-large'>{name}</a>
<br />
 Website: {website}
</CardHeader>
<CardBody className="overflow-visible p-0">
<a href=""> <img src="avatar.jpg" alt="box_img" className="object-cover rounded-full" /></a> 
<button className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:bg-slate-800
 rounded-full px-5 py-2 ">
                Hire
              </button>
</CardBody>


</li>

</div>


       
      
      </Card>
       
      
      
     ))
     }
    
  </ul>
  </div>
 <Footer/>
</section>

  )
}


  


// 'use client'
// async function getData() {
//   const res = await fetch("https://jsonplaceholder.typicode.com/users" );
//   if (res.ok) {
//     return res.json();
//   } else {
//     console.log("ERROR");
//   }
// }

// export default async function Profile(){

//   const user= await getData();
//   return (
//       <div className="mx-auto max-w-2xl mt-4 bg-gradient-to-tr from-blue-900 to-black">
//           <div className="my-5 flex flex-col gap-4">
//               {/* <h3>Name: {user.username}</h3>
//               <p>Profile Type: {user.userType}</p>
//               <p>Email: {user.email}</p>
//               <p>Address: {user.address}</p>
//               <p>City: {user.city}</p>
//               <p>Phone: {user.phone}</p>
//               <p>Photo: {user.photo}</p> */}
             
//           </div>
//       </div>
//   )
// }




// // 'use client'
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// function ClientForm() {
//   const [data, setData] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get('https://jsonplaceholder.typicode.com/users');
//         setData(response.data);
//       } catch (error) {
//         console.error('Error:', error);
//       }
//     };

//     fetchData();
//     console.log(setData)
//   }, []);

//   if (!data) return <div>Loading...</div>;

//   return (
//     <div>
//       {/* Display the data */}
//     </div>
//   );
// }

// export default ClientForm;
