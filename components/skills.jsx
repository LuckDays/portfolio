import { skillList } from "./skillList";

const skills = () => {
  return (
    <section id='about' className='mt-10 flex items-center justify-center'>
      <div className='md:container grid xm:grid-rows-2 md:grid-cols-2'>
        {/* First Column */}
        <div className='flex flex-col items-start p-10 gap-6 row-span-1 md:col-span-1'>
          {skillList.map((items, index) => {
            return (
              <div
                key={index}
                className='relative drop-shadow-lg overflow-hidden flex p-5 items-center rounded-md bg-colorPrimary text-white justify-between w-full xl:hover:w-[680px] hover:bg-colorSecondary duration-300 ease-out'
              >
                <label className='z-40'>{items.title}</label>
                <em className='z-40'>{items.level}</em>
                <div className='absolute animate-pulse rounded-full h-44 w-44 bg-clip-content -translate-x-9 bg-colorPrimary blur-2xl' />
              </div>
            );
          })}
        </div>
        {/* Second Column */}
        <div className='row-span-1 md:col-span-1 flex flex-col justify-center items-center w-full px-12'>
          <h2 className='text-2xl text-center'>Quem eu sou e o quê eu faço?</h2>
          <p className='text-justify w-full'>
            Sou Lucas tenho 18 anos. Estou recomeçando nos estudos sobre
            programação web e depois de ter sentido a nostalgia do meu ensino
            médio, no qual cursei informática, resolvi retornar aos estudos na
            área. Este portfólio é fruto de estudos de 6 meses sobre front-end e
            espero ganhar experiência de trabalho para quem sabe um dia tornar
            meu hobbie uma carreira.
          </p>
        </div>
      </div>
    </section>
  );
};

export default skills;
