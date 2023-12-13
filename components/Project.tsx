import { motion } from 'framer-motion'
import SectionTitle from './SectionTitle'
import { Card } from './Card'
import {ProjectItem} from './ProjectItem'

const Project = () => {
  return (
    <section id='project' className='max-w-contentContainer mx-auto px-4 py-24 mt-20'>
      <motion.div
        className='mb-20'
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.2 }}
        variants={{
          hidden: { y: 10, opacity: 0 },
          visible: { y: 0, opacity: 1 }
        }}>
        <SectionTitle title="Things I've built" titleNo="03" className='' />
        <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-10'>
          {ProjectItem.map((item)=> (
            <Card key={item.id} project={item}/>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default Project
