import Layout from '../components/layout'
import { getCookie } from 'cookies-next';
import Link from 'next/link'
import clientPromise from "../lib/mongodb";
import NavbarApp from '@/components/Navbar';
import Footer from '@/components/Footer';
import Image from 'next/image';

export default function ProfilePage( {username, created} ) {
    return (
        <Layout pageTitle="Profile" >
            <NavbarApp/>
            <div className=' p-8 bg-gray-300 text-black '>
            <div className='m-10 ml-20' > 
            
            <Image
              shadow="sm"
              radius="lg"
              width="100"
              height="100"
              alt={"fdhgj"}
              className="object-center"
              src={'/man.png'}
            />
                <h2 >{username}'s Profile</h2>
            <p >Account created at <strong>{created}</strong></p>
            </div>
            </div>
            
           
          
           
            <Footer/>
        </Layout>
    );
}

export async function getServerSideProps(context) {
    const req = context.req
    const res = context.res
    var username = getCookie('username', { req, res });
    if (username == undefined){
        return {
            redirect: {
                permanent: false,
                destination: "/"
            }
        }
    }
    const client = await clientPromise;
    const db = client.db("Users");
    const users = await db.collection("Profiles").find({"Username": username}).toArray();
    const userdoc = users[0]
    const created = userdoc['Created']
    return {
      props: {username: username, created: created},
    }
}