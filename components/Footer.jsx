// import Image from "next/image"

// import footerImg from "../public/footer-img.jpg"
import Link from "next/link"
function Footer() {
  return (
    <footer className="text-white footers bg-black">
        <div className="text-center">
            <h2 className="text-center text-2xl p-4">The HandCraft Digest</h2>
<p className="text-sm">
Get a roundup of newsletters, official release and information
 No spam. <span>Just promos!</span>
</p>

<div >
<form className="">

<div className=" flex space-x-2 m-5 columns-2 place-content-center w-auto">
<div><label className="">
  <span className="after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
  </span>
  <input type="text" name="name" className="mt-1 px-3 py-2
    border shadow-sm border-slate-300 w-64
   placeholder-slate-400 focus:outline-none
    focus:border-sky-500 focus:ring-sky-500 block
     rounded-full sm:text-sm focus:ring-1 bg-black" 
     placeholder="Name" />
</label></div>


    <div><label className="">
  <span className="after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
  </span>
  <input type="email" name="email" className="mt-1 px-3 py-2
    border shadow-sm border-slate-300 w-65
   placeholder-slate-400 focus:outline-none
    focus:border-sky-500 focus:ring-sky-500 block
     rounded-full sm:text-sm focus:ring-1 bg-black" 
     placeholder="Email" />
</label></div>

</div>
<div className="">
<div className="flex place-content-center "><button className="block rounded-full
    border bg-white text-black p-1 w-96">Subscribe</button></div>

</div>
   

</form>
  
</div>

        </div>

    </footer>
  )
}

export default Footer