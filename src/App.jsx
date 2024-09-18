
import { ReactLenis } from '@studio-freight/react-lenis'
import { useTransform, motion, useScroll } from 'framer-motion'
import { useRef } from 'react'
import { Github, Linkedin, Twitter, Instagram } from 'lucide-react'

function App() {

  
const projects = [
  {
    title: 'Civil Engineering (ASCE)',
    description: 'Explore the revolutionary impact of the wheel on transportation and infrastructure development, from ancient civilizations to modern cities. ',
    src: '/civil.jpg',
    color: '#d8dbe9',
  },
  {
    title: 'Mechanical Engineering (ASME)',
    description: 'Delve into the Industrial Revolution, a turning point in history that introduced mechanized production. ',
    src: '/mech.jpg',
    color: '#c7cbdc',
  },
  {
    title: 'Electrical and Computer Science (IETE)',
    description: 'Uncover the groundbreaking inventions of the telegraph and telephone that transformed global communication. ',
    src: '/ecs.jpg',
    color: '#b6bbcf',
  },
  {
    title: 'Electronics and Telecommunication Engineering (IEEE)',
    description: 'Discover the advent of radio and television, which revolutionized mass communication and entertainment. ',
    src: '/extc.jpg',
    color: '#a5abc2',
  },
  {
    title: 'Information Technology (ACM)',
    description: 'Journey through the birth of the internet, the most transformative invention of the 20th century. ',
    src: '/it.jpg',
    color: '#949ab4',
  },
  {
    title: 'Computer Science Engineering (CSI)',
    description: 'Explore the rise of artificial intelligence, a technological frontier that is redefining industries, from healthcare to automation. ',
    src: '/comp.jpg',
    color: '#838aa7',
  }
];

const Card = ({ i, title, description, src, url, color, progress, range, targetScale }) => {
  const container = useRef(null)
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'start start'],
  })

  const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1])
  const scale = useTransform(progress, range, [1, targetScale])

  return (
    <div ref={container} className="h-screen w-full flex items-center justify-center sticky top-0">
      <motion.div
        style={{
          backgroundColor: color,
          scale,
          top: `calc(-5vh + ${i * 25}px)`,
        }}
        className="flex flex-col relative -top-[25%] h-[100%] w-[100%] rounded-md p-10 origin-top"
      >
        <h2 className="text-3xl text-center font-semibold text-black hover:underline p-2 hover:text-4xlunderline-offset-4 cursor-pointer hover:scale-110 transition-all">{title}</h2>
        <div className="flex flex-col sm:flex-row h-screen mt-5 gap-10">
          <div className="hidden sm:flex sm:flex-col w-[40%] relative top-[10%]">
            <p className="text-3xl text-black hover:underline p-2 underline-offset-4 cursor-pointer hover:scale-105 transition-all">{description}</p>
            <br/>
            <span className=" items-center gap-2 pt-2 hover:scale-110 transition-all">
              <a href={'#'} target="_blank" className="text-black text-3xl font-medium hover:underline p-2 underline-offset-4 cursor-pointer  hover:scale-110 transition-all">
                See Events
              </a>
              
            </span>
          </div>

          <div className=" relative top-[20%] sm:top-[0%] w-[100%]   h-[50%] sm:w-[60%] sm:h-full rounded-lg overflow-hidden ">
            <motion.div className="w-full h-full" style={{ scale: imageScale }}>
              <img fill src={src} alt="image" className="object-cover" />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

const container = useRef(null)
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end'],
  })
  return (
    <ReactLenis root>
      <main className="bg-black" ref={container}>
        <section className="text-black h-[70vh] w-full bg-slate-950 grid place-content-center">
          <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:54px_54px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
          <h1 className="2xl:text-9xl text-5xl px-8 font-semibold text-center tracking-tight leading-[120%] bg-gradient-to-r from-teal-400 to-yellow-200 bg-clip-text text-transparent">
             ZEPHYR </h1><br /> 
             <h3 className="2xl:text-xl text-5xl px-8 font-semibold text-center tracking-tight leading-[120%] bg-gradient-to-r from-teal-400 to-yellow-200 bg-clip-text text-transparent">
                Spectrum of Innovation  👇
            </h3>
          
        </section>

        <section className="text-white w-full h-full bg-slate-950">
          {projects.map((project, i) => {
            const targetScale = 1 - (projects.length - i ) * 0.05
            return (
              <Card
                key={`p_${i}`}
                i={i}
                src={project?.src}
                title={project?.title}
                color={project?.color}
                description={project?.description}
                progress={scrollYProgress}
                range={[i * 0.25, 1]}
                targetScale={targetScale}
              />
            )
          })}
        </section>
        
        <footer className="group bg-slate-950">
          <h1 className="text-[16vw] translate-y-20 leading-[100%] uppercase font-semibold text-center bg-gradient-to-r from-teal-400 to-yellow-200 bg-clip-text text-transparent transition-all ease-linear">
            ZEPHYR
          </h1>
          <div className="bg-black h-40 relative z-10 grid place-content-center text-2xl rounded-tr-full rounded-tl-full">
            <div className="mt-8 flex justify-center md:justify-start space-x-6">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-xs  p-1 border bg-primary rounded-full   text-center   text-white hover:ring-2 hover:ring-teal-600 focus:outline-none focus:ring   cursor-pointer hover:scale-110 transition-all">
                <Github className="h-6 w-6" />
              </a>
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="text-xs  p-1 border bg-primary rounded-full   text-center   text-white hover:ring-2 hover:ring-teal-600 focus:outline-none focus:ring   cursor-pointer hover:scale-110 transition-all">
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="https://x.com" target="_blank" rel="noopener noreferrer" className="text-xs  p-1 border bg-primary rounded-full   text-center   text-white hover:ring-2 hover:ring-teal-600 focus:outline-none focus:ring   cursor-pointer hover:scale-110 transition-all">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-xs  p-1 border bg-primary rounded-full   text-center   text-white hover:ring-2 hover:ring-teal-600 focus:outline-none focus:ring   cursor-pointer hover:scale-110 transition-all">
                <Instagram className="h-6 w-6" />
              </a>
            </div>
          </div>
        </footer>
      </main>
    </ReactLenis>
  )
}

export default App
