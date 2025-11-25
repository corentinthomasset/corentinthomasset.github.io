import arcpay from '@/assets/media/arcpay.webm'
import arcpayPoster from '@/assets/media/arcpay_poster.png'
import nearbuy from '@/assets/media/nearbuy.webm'
import nearbuyPoster from '@/assets/media/nearbuy_poster.png'
import greenup from '@/assets/media/greenup.webm'
import greenupPoster from '@/assets/media/greenup_poster.png'
import sereniot from '@/assets/media/sereniot.webm'
import sereniotPoster from '@/assets/media/sereniot_poster.png'
export default [
  {
    title: 'Arcpay',
    description: 'On-chain payment processor for tokenized assets on AVM chains. Recipient of two grants from XGOV and VOI.',
    date: 'Current',
    affiliation: 'Frostbits Solutions',
    thumbnailMedia: arcpay,
    thumbnailPoster: arcpayPoster,
    links: [
      {
        url: 'https://github.com/Frostbits-Solutions/arcpay-dashboard',
        icon: 'i-lucide-github',
      },
      {
        url: 'https://app.arcpay.dev/',
        icon: 'i-lucide-link-2',
        label: 'arcpay dashboard',
      },
    ],
  },
  {
    title: 'Vulnberability Management Platform',
    description: 'Unified platform to automate and streamline vulnerability management operations.',
    date: 'Current',
    affiliation: 'Morgan Stanley',
    thumbnailMedia: '',
    thumbnailPoster: arcpayPoster,
    links: [],
  },
  {
    title: 'Nearbuy',
    description:
      'Chrome extension that finds nearby pre-owned alternatives while shopping online. Includes a scraping backend and an intuitive UI to surface eco‑friendly secondhand options. 2nd runner up at IBM Call for Code 2022.',
    date: '2022',
    affiliation: 'Call for Code 2022',
    thumbnailMedia: nearbuy,
    thumbnailPoster: nearbuyPoster,
    links: [
      {
        url: 'https://github.com/corentinthomasset/call-for-code-2022',
        icon: 'i-lucide-github',
      },
      {
        url: 'https://www.youtube.com/watch?v=fa7A41oZJPw',
        icon: 'i-lucide-youtube',
        label: 'nearbuy demo',
      },
    ],
  },
  {
    title: 'Greenup',
    description: 'Mobile-first PWA that helps investors align portfolios with ESG metrics via swipeable investment recommendations.',
    date: '2021',
    affiliation: 'Call for Code 2021',
    thumbnailMedia: greenup,
    thumbnailPoster: greenupPoster,
    links: [
      {
        url: 'https://github.com/corentinthomasset/call-for-code-2021',
        icon: 'i-lucide-github',
      },
    ],
  },
  {
    title: 'SERENIoT',
    description:
      'Academic research project implementing a distributed system for real-time security policy management and enforcement in IoT home networks, with a custom JavaScript ledger and real-time visualization.',
    date: '2020',
    affiliation: 'Polytechnique Montréal',
    thumbnailMedia: sereniot,
    thumbnailPoster: sereniotPoster,
    links: [
      {
        url: 'https://arxiv.org/abs/2003.02892',
        icon: 'i-lucide-link-2',
        label: 'research paper',
      },
      {
        url: 'https://corentinthomasset.me/demo/sereniot/',
        icon: 'i-lucide-link-2',
        label: 'dashboard demo',
      },
    ],
  },
]
