import { createFileRoute } from '@tanstack/react-router'
import { Header } from '@/components/common'
import { UsersListContent } from '@/components'

const UsersList: React.FunctionComponent = () => {
  return (
    <div className="tw:p-8 tw:space-y-4">
      <Header />
      <UsersListContent />
    </div>
  )
}

export const Route = createFileRoute('/users/list')({
  component: UsersList,
})
