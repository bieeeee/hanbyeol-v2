import SectionTitle from './SectionTitle'
import { Card } from './Card'
import { ProjectItem } from './ProjectItem'
import { inView } from './motion'

const Project = ({ m }: any) => {
  return (
    <section id='project' className='max-w-contentContainer h-[89vh] py-10 lgl:py-24 mx-auto px-4 py-24'>
      <m.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={inView}
      >
        <SectionTitle title="Things I've built" titleNo="03" className='' />
        <div className='grid grid-cols-1 md:grid-cols-2 lgl:grid-cols-3 gap-6 mt-10'>
          {ProjectItem.map((item) => (
            <Card key={item.id} project={item} />
          ))}
        </div>
      </m.div>
    </section>
  )
}

export default Project
