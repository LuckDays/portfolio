import { useState, useEffect } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import Dropdown from "./dropdown";
import { dropdownLinks } from "../components/dropdownLinks";
import { HiSun } from "react-icons/hi";
import { HiMoon } from "react-icons/hi";

function navbar() {
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const ThemeChanger = () => {
    const currentTheme = theme === "system" ? systemTheme : theme;

    if (currentTheme === "dark") {
      return <HiSun className='h-12 w-6' onClick={() => setTheme("light")} />;
    } else {
      return <HiMoon className='h-12 w-6' onClick={() => setTheme("dark")} />;
    }
  };

  return (
    <header className='flex flex-col gap-5 lg:flex-row items-center justify-evenly py-5 sticky backdrop-blur-lg'>
      <label className='text-3xl'>Bem vindo ao meu portfólio</label>
      <nav className='flex md:w-auto space-x-10'>
        <div className='hidden md:flex justify-between gap-10'>
          {dropdownLinks.map((items, index) => {
            return (
              <Link href={items.Link} key={index}>
                <a className='nav_btn'>{items.linkName}</a>
              </Link>
            );
          })}
        </div>
        <span className='md:hidden'>
          <Dropdown />
        </span>
        {ThemeChanger()}
      </nav>
    </header>
  );
}

export default navbar;
