function Greetings() {
  return (
    <div className='bg-blue-900 flex flex-row items-center justify-center w-full bg-opacity-10'>
      <section
        id='greetings'
        className='grid grid-cols-1 grid-rows-2 md:grid-rows-1 md:grid-cols-2 container items-center justify-center md:h-[240px] lg:h-[320px] xl:h-[400px] 2xl:h-[480px] '
      >
        <div className='flex flex-col items-start justify-end md:justify-center h-full px-6'>
          <h2 className='text-5xl'>Lucas de Sousa Dias Frota</h2>
          <em>
            <p>
              <q>
                Estou começando a desenvolver para web e aprendendo cada vez
                mais sobre front-end principalmente JS.
              </q>
            </p>
          </em>
        </div>
        <div className='flex items-center justify-center relative'>
          <div className='rounded-full h-32 w-32 md:h-44 md:w-44 opacity-90 blur-xl bg-colorPrimary absolute -translate-x-16 animate-pulse' />
          <div className='rounded-full h-24 w-24 md:h-36 md:w-36 opacity-90 blur-xl bg-colorSecondary translate-x-7 absolute animate-pulse' />
          <div className='absolute'>
            <img
              src='/banner.png'
              alt='banner1'
              className='
                w-[263px] h-[350px]
                lg:h-[400px] lg:w-[300px]
                xl:h-[400px]
                '
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Greetings;
