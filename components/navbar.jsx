import { useState, useEffect } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import Dropdown from "./dropdown";
import { dropdownLinks } from "../components/dropdownLinks";
import { HiSun } from "react-icons/hi";
import { HiMoon } from "react-icons/hi";

function Navbar() {
  {
    /* Changing Theme Logic for Server Hydradation */
  }
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
    <header className='sticky flex flex-col gap-5 lg:flex-row items-center justify-evenly py-5 top-0 backdrop-blur-lg z-40'>
      <h1>
        <label className='text-2xl sm:text-3xl'>
          Bem vindo ao meu portfólio
        </label>
      </h1>

      {/* mobile view nav */}
      <nav className='md:hidden flex flex-row gap-16'>
        <Dropdown />
        {ThemeChanger()}
      </nav>

      {/* large view nav */}
      <nav className='hidden md:flex md:w-auto space-x-10'>
        <div className='md:flex justify-between gap-10'>
          {dropdownLinks.map((items, index) => {
            return (
              <Link href={items.Link} key={index}>
                <a className='nav_btn'>{items.linkName}</a>
              </Link>
            );
          })}
        </div>
        {ThemeChanger()}
      </nav>
    </header>
  );
}

export default Navbar;
