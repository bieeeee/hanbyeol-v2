import SectionTitle from './SectionTitle'
import { Card } from './Card'
import { ProjectItem } from './ProjectItem'

const Project = () => {
  return (
    <div className='mb-20'>
      <SectionTitle title="Things I've built" titleNo="03" className='' />
      <div className='grid grid-cols-1 md:grid-cols-2 lgl:grid-cols-3 gap-6 mt-10'>
        {ProjectItem.map((item) => (
          <Card key={item.id} project={item} />
        ))}
      </div>
    </div>
  )
}

export default Project
