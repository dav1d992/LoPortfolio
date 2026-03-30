import { IconButton } from "@chakra-ui/react";
import Link from "next/link";
import type { IconType } from "react-icons";
import { BsPencilSquare, BsHouse, BsFilePerson, BsLaptop } from "react-icons/bs";

type NavItemProps = {
  href: string;
  label: string;
  icon: IconType;
};

const NavItem = ({ href, label, icon }: NavItemProps) => {
  const handleClickNavigation = () => {};

  return (
    <Link href={href}>
      <IconButton
        aria-label={label}
        title={label}
        variant="ghost"
        flexBasis="25%"
        fontSize={["2xl", "md"]}
        padding={0}
        onClick={handleClickNavigation}
      >
        {icon({ style: { cursor: "pointer" } })}
      </IconButton>
    </Link>
  );
};

const navigations: NavItemProps[] = [
  {
    href: "/",
    label: "Home",
    icon: BsHouse,
  },
  {
    href: "/blog",
    label: "Blog",
    icon: BsPencilSquare,
  },
  {
    href: "/projects",
    label: "Projects",
    icon: BsLaptop,
  },
  {
    href: "/about",
    label: "About me",
    icon: BsFilePerson,
  },
];

const Navigation = () => {
  return (
    <>
      {navigations.map((navigation) => (
        <NavItem {...navigation} key={navigation.label} />
      ))}
    </>
  );
};

export default Navigation;
