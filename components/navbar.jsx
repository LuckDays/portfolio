import { useState, useEffect } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";

function navbar() {
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const ThemeChanger = () => {
    const currentTheme = theme === "system" ? systemTheme : theme;

    if (currentTheme === "dark") {
      return (
        <button className='nav_btn' onClick={() => setTheme("light")}>
          Que se faça a luz!
        </button>
      );
    } else {
      return (
        <button className='nav_btn' onClick={() => setTheme("dark")}>
          Apaga a luz!
        </button>
      );
    }
  };

  return (
    <div className='flex items-center justify-evenly py-5 sticky backdrop-blur-lg'>
      <label className='text-2xl'>Bem vindo ao meu portfólio</label>
      <div className='flex justify-between gap-10'>
        <Link href={""}>
          <a className='nav_btn'>Começo</a>
        </Link>
        <Link href={""}>
          <a className='nav_btn'>Sobre</a>
        </Link>
        <Link href={""}>
          <a className='nav_btn'>Projetos</a>
        </Link>
        <Link href={""}>
          <a className='nav_btn'>Contato</a>
        </Link>
        {ThemeChanger()}
      </div>
    </div>
  );
}

export default navbar;
