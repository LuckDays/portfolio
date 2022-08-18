const Projects = () => {
  return (
    <section
      className='pt-36 lg:pt-24 flex items-center justify-center'
      id='projects'
    >
      <div className='md:container flex flex-col items-center px-5'>
        <h2 className='text-2xl font-semibold'>Projetos Recentes</h2>
        <div className='container mt-4'>
          <div className='flex items-center justify-center overflow-x-scroll bg-blue-900 scroll bg-opacity-10 w-full h-72 rounded-lg border-2 border-spacing-1 border-gray-600'>
            <p>Estou trabalhando em novos projetos</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
