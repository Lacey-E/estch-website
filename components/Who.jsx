import { Button } from "@nextui-org/react";
export default function Who() {
  return (
    <div className="bg-white text-black mb-20 m-5">
      <div className="align-center m-5 text-center">
        <div>
          <h2 className="text-4xl block my-text p-5">Who Are We?</h2>
        </div>

        <div className="text-xl">
         
          <p className="block m-auto w-1/2 pt-10">
            We are the first online platform for African minded people, where
            you can get exclusive original Tech talents from Africa!
          </p>

          <p className="block m-auto w-1/2 pt-10">
            Combined with our unlimited registed talents, showcase, branding for artistes, local
            businesses. We are on a mission of showcasing
            Africa through tech talents to the world.
          </p>
          <div className="w-1/2"></div>
        </div>

        <Button className='w-48 mt-20 bg-black mb-8 text-white'>
       Get Started
      </Button>  

      </div>
    </div>
  );
}
