import { IconButton, Tooltip } from "@chakra-ui/react";
import Link from "next/link";
import type { IconType } from "react-icons";
import { BsPencilSquare, BsHouse, BsFilePerson } from "react-icons/bs";

type NavItemProps = {
  href: string;
  label: string;
  icon: IconType;
};

const NavItem = ({ href, label, icon }: NavItemProps) => {
  const handleClickNavigation = () => {};

  return (
    <Tooltip hasArrow label={label} shouldWrapChildren>
      <Link href={href} passHref>
        <IconButton
          as="a"
          aria-label={label}
          variant="ghost"
          flexBasis="25%"
          fontSize={["2xl", "md"]}
          padding={0}
          onClick={handleClickNavigation}
        >
          {icon({ style: { cursor: "pointer" } })}
        </IconButton>
      </Link>
    </Tooltip>
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
