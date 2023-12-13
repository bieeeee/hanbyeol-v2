import v1Img from '../public/assets/images/hanbyeol.jpg'
import Image from 'next/image'

export const ProjectModalItem = [
  {
    id: 'v1',
    title: 'hanbyeol-v1',
    image: <Image src={v1Img} alt="v1Image" />,
    period: '2023/03/02 - 2023/09/11',
    team: 1,
    role: ['Designed with Figma', 'Deployed', 'Performance'],
  },
  {
    id: 'v2',
    title: 'hanbyeol-v2',
    image: <Image src={v1Img} alt="v1Image" />,
    period: '2023/03/02 - 2023/09/11',
    team: 1,
    role: ['Designed with Figma', 'Deployed', 'Performance'],
  }
]
