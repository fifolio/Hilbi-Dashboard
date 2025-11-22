import { createFileRoute } from '@tanstack/react-router'
import { Header } from '@/components/common'

const Dashboard: React.FunctionComponent = () => {
  return (
    <div className="tw:p-8">
      <Header />
    </div>
  )
}

export const Route = createFileRoute('/')({
  component: Dashboard,
})
