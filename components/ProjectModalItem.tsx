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
    role: ['v1.0', 'v1.1', 'v1.2'],
    gh: 'https://github.com/bieeeee/hanbyeol.me',
  },
  {
    id: 'zapfit',
    title: 'Zapfit',
    image: <Image src={zapfit} alt="zapfit" />,
    period: '2023/01/25 - 2023/03/11',
    team: 1,
    role: ['zapfit.0','zapfit.1','zapfit.2'],
    gh: '',
  },
  {
    id: 'only',
    title: 'OnlyDevs',
    image: <Image src={onlydevs} alt="onlydevs" />,
    period: '2023/07/29 - 2023/07/31',
    team: 3,
    role: ['only.0','only.1','only.2'],
    gh: 'https://github.com/bieeeee/onlydevs',
  },
  {
    id: 'plan',
    title: 'Plan For You',
    image: <Image src={planforyou} alt="planforyou" />,
    period: '2022/11/22 - 2022/12/02',
    team: 3,
    role: ['plan.0','plan.1','plan.2'],
    gh: 'https://github.com/bieeeee/PLAN4U#readme',
  }
]
