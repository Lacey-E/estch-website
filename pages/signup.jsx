import Layout from '../components/layout'
import { getCookie } from 'cookies-next';
import Link from 'next/link'
import { useRouter } from 'next/router'
import NavbarApp from '@/components/Navbar';
import Footer from '@/components/Footer';
export default function SignupPage( {username} ) {
    const router = useRouter()
    const { msg } = router.query
    return (
        <Layout pageTitle="Signup">
             <NavbarApp />
             <div className='bg-white text-black  p-20 text-center'>
             <Link href="/"></Link><br/>
            {msg ?
                <h3 className="red">{msg}</h3>
            :
                <></>
            }
            <h2>Sign up</h2>
            <form action='/api/signup' method='POST' className="max-w-md mx-auto mt-8 p-4 bg-gray-100 rounded-md">
                <input minLength="3" name="username" id="username" type="text" placeholder='username'
                className="mt-1 p-2 w-full border rounded-md" required></input><br/>
                <input minLength="5" name="password" id="password" type="password" placeholder='password' 
                className="mt-1 p-2 w-full border rounded-md" required></input><br/>
                <input minLength="5" name="passwordagain" id="passwordagain" type="password" 
                className="mt-1 p-2 w-full border rounded-md" placeholder='password again' required></input><br/>
                <input  className="bg-blue-900 text-white p-2 rounded-md m-5" type="submit" value="Signup"/>
            </form>


             </div>
           
            <Footer/>
        </Layout>
    );
}

export async function getServerSideProps(context) {
    const req = context.req
    const res = context.res
    var username = getCookie('username', { req, res });
    if (username != undefined){
        return {
            redirect: {
                permanent: false,
                destination: "/"
            }
        }
    }
    return { props: {username:false} };
};