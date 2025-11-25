import {
  BulbOutlined,
  CloudOutlined,
  PoweroffOutlined,
} from '@ant-design/icons'
import type { CardStructure } from '@/interfaces'

const structure: Array<CardStructure> = [
  {
    title: 'Total users',
    description: 'Total registered accounts',
    icon: <CloudOutlined className="tw:text-[17px] tw:text-gray-600!" />,
  },
  {
    title: 'Active users',
    description: 'Total active account',
    icon: <BulbOutlined className="tw:text-[17px] tw:text-gray-600!" />,
  },
  {
    title: 'Inactive users',
    description: 'Total inactive account',
    icon: <PoweroffOutlined className="tw:text-[17px] tw:text-gray-600!" />,
  },
]

export default structure
