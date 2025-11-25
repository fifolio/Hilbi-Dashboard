export interface UserAddress {
  street: string
  city: string
  zip: string
  country: string
}

export interface UserAccount {
  balance: number
  currency: string
}

export interface User {
  id: number
  firstName: string
  lastName: string
  email: string
  status: string
  createdAt: string
  updatedAt: string
  address: UserAddress
  account: UserAccount
}
