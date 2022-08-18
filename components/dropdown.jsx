import { useState } from "react";
import { dropdownLinks } from "./dropdownLinks";
import Link from "next/link";

function Dropdown() {
  {
    /* Dropdown Nav Logic */
  }
  const [open, setOpen] = useState(false);

  const toggle = () => {
    setOpen(!open);
  };

  return (
    <div className='flex'>
      <button onClick={toggle} className='nav_btn'>
        Menu
      </button>
      {open && (
        <div className='flex flex-col translate-y-14 fixed rounded bg-white dark:bg-slate-900 shadow z-50 w-28'>
          {dropdownLinks.map((items, index) => {
            return (
              <Link href={items.Link} key={index}>
                <a className='text-sm py-2 px-2'>{items.linkName}</a>
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default Dropdown;
