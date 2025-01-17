import ProjectCard from './ProjectCard';

const works = [
    {
      imgSrc: '/images/project.png',
      title: 'Ruma furniture app',
      tags: ['React JS',' Tailwind CSS', 'Daisy UI', 'API'],
      projectLink: 'https://ruma-property.netlify.app/'
    },
    {
      imgSrc: '/images/project2.png',
      title: 'Dashboard property',
      tags: ['React JS',' Tailwind CSS', 'Material UI', 'API'],
      projectLink: 'https://yariga-property-hub.netlify.app'
    },
    {
      imgSrc: '/images/project-3.svg',
      title: 'Open API Neo Bank Commerce ',
      status: 'not available',
      tags: ['Next JS', 'Ant Design', 'API'],
      // projectLink: ''
    },
    {
      imgSrc: '/images/project-5.png',
      title: 'Sushiman Tokyo',
      tags: ['JavaScript', 'CSS'],
      projectLink: 'https://sushiman-tokyo.netlify.app/'
    },
    {
      imgSrc: '/images/project-4.png',
      title: 'Sahabat UMKM (Final project Studi Independent)',
      tags: ['React JS','API', 'Tailwind CSS'],
      projectLink: 'https://sahabat-umkm.netlify.app'
    },
    
  ];

const Work = () => {
  return (
   <section id='work' className='section'>
    <div className="container">
        <h2 className="headline-2 mb-8">
        My portfolio highlights
        </h2>
        <div className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))]">{works.map(({imgSrc,title,tags,projectLink,status},key)=>(
            <ProjectCard key={key} imgSrc={imgSrc} title={title} tags={tags} projectLink={projectLink} status={status}/>
        ))}</div>
    </div>
   </section>
  )
}

export default Work
