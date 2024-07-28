import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
  Button,
  Input,
} from "@nextui-org/react";
import { Search } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    "Profile",
    "Dashboard",
    "Activity",
    "Analytics",
    "System",
    "Deployments",
    "My Settings",
    "Team Settings",
    "Help & Feedback",
    "Log Out",
  ];

  return (
    <>
      <Navbar onMenuOpenChange={setIsMenuOpen} className="min-w-[100dvh]">
        <NavbarContent justify="start">
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="sm:hidden"
          />
          <NavbarBrand>
            <p className="text-2xl font-bold text-inherit">RBhowmick</p>
          </NavbarBrand>
        </NavbarContent>

        <NavbarContent className="hidden gap-4 sm:flex" justify="center">
          <NavbarItem isActive>
            <Link href="#" aria-current="page">
              Home
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link href="#" color="foreground">
              Account
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="#">
              Setings
            </Link>
          </NavbarItem>
        </NavbarContent>

        <NavbarContent as="div" className="items-center" justify="end">
          <Input
            color="primary"
            classNames={{
              base: "max-w-full sm:max-w-[10rem] h-10",
              mainWrapper: "h-full",
              input: "text-small",
              inputWrapper:
                "h-full font-normal text-default-500 bg-[#e6f1fe] dark:bg-default-500/20",
            }}
            placeholder="Type to search..."
            size="sm"
            startContent={<Search size={18} />}
            type="search"
          />

          <NavbarItem className="hidden lg:flex">
            <Link href="/signin">Sign In</Link>
          </NavbarItem>
          <NavbarItem>
            <Button as={Link} color="primary" href="/signup" variant="flat">
              Sign Up
            </Button>
          </NavbarItem>
        </NavbarContent>
        <NavbarMenu>
          {menuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                color={
                  index === 2
                    ? "primary"
                    : index === menuItems.length - 1
                      ? "danger"
                      : "foreground"
                }
                className="w-full"
                href="#"
                size="lg"
              >
                {item}
              </Link>
            </NavbarMenuItem>
          ))}
        </NavbarMenu>
      </Navbar>
    </>
  );
};

export default Header;
