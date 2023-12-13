import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@nextui-org/react";
import { Logo } from "./Logo";
import Link from "next/link";
import { Button } from "@nextui-org/react";

export default function NavbarApp({username}) {
  const menuItems = [
    "Profile",
    "Dashboard",
    "Log Out",
  ];

  return (
    <Navbar className="bg-white text-black border-solid border-2 border-black shadow-xl">
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarContent className="sm:hidden pr-3" justify="center">
        <NavbarBrand>
          <Logo />
          <p className="font-bold text-inherit">EsTech Solutions</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="end">
        <NavbarBrand>
          <Logo />
          <p className="font-bold text-inherit">EsTech Solutions</p>
        </NavbarBrand>
        <NavbarItem>
          <Link  className="hover:text-blue-900 "  href="/client">
            Shop
          </Link>
        </NavbarItem>
        <NavbarItem isActive >
          <Link href="/" aria-current="page" color="warning" className="hover:text-blue-900">
            Home
          </Link>
        </NavbarItem>
        <NavbarItem  className="hover:text-blue-900">
          <Link color="foreground" href="#">
            About
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent justify="end">
      {username ?
           <>
       
               <h2>Hi {username}</h2>
               <Link href="/profile">Profile</Link><br/>
               <Link href="/api/logout">Logout</Link>
           </>: 
           <>
               <Link href="/login">Login</Link><br/>
               <Link href="/signup">Signup</Link>
           </>
           }
        {/* <NavbarItem className="hidden lg:flex hover:text-blue-900">
          <Link href="#" className="hover:text-blue-900">Login</Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="warning" href="#" variant="flat" className="hover:text-black">
            Sign Up
          </Button>
        </NavbarItem> */}
      </NavbarContent>
      
           
          


      <NavbarMenu className="text-black ">
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className="w-full hover:text-blue-900"
              color={
                index === 2
                  ? "warning"
                  : index === menuItems.length - 1
                  ? "danger"
                  : "foreground"
              }
              href="#"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
