import Image from 'next/image'
import v1 from '../public/assets/images/hanbyeol.jpg'
import onlydevs from '../public/assets/images/onlydevs.jpg'
import planforyou from '../public/assets/images/planforyou.jpg'
import zapfit from '../public/assets/images/zapfit.jpg'



export const ProjectModalItem = [
  {
    id: 'v1',
    title: 'Hanbyeol.v1',
    image: <Image src={v1} alt="v1" />,
    period: '2023/04/29 - 2023/11/20',
    team: 1,
    role: ['Improved performance through image optimization, page layout redesign, and code splitting with lazy/dynamic loading, boosting Lighthouse score from 66 to 90', 'Switched from CSR to SSR using Express, resulting in a 2x reduction in initial loading speed', 'Implemented multi-language support using react-i18n'],
    gh: 'https://github.com/bieeeee/hanbyeol.me',
  },
  {
    id: 'zapfit',
    title: 'Zapfit',
    image: <Image src={zapfit} alt="zapfit" />,
    period: '2023/01/25 - 2023/03/11',
    team: 1,
    role: ['Designed UI/UX design with Figma', 'Built a REST API server using Node, Express, and MongoDB', 'Implemented user and administrator authentication with JWT and Context API'],
    gh: '',
  },
  {
    id: 'only',
    title: 'OnlyDevs',
    image: <Image src={onlydevs} alt="onlydevs" />,
    period: '2023/07/29 - 2023/07/31',
    team: 3,
    role: ['Designed database schema', 'Implemented a bulletin board and comment section within the user profile', 'Designed UI using Figma and developed responsive web with TailwindCSS'],
    gh: 'https://github.com/bieeeee/onlydevs',
  },
  {
    id: 'plan',
    title: 'Plan For You',
    image: <Image src={planforyou} alt="planforyou" />,
    period: '2022/11/22 - 2022/12/02',
    team: 3,
    role: ['Designed and configured database', "Implemented the core feature of automatically generating seating layouts based on guests' seating preferences using the ORTools gem", 'Developed frontend using JavaScript and Bootstrap'],
    gh: 'https://github.com/bieeeee/PLAN4U#readme',
  }
]
