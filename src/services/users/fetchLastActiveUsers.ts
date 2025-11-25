export async function fetchLastActiveUsers() {
  try {
    const res = await fetch(
      'http://localhost:50000/users?page=1&pageSize=5&sort=updatedAt_desc',
    )

    if (!res.ok) {
      throw new Error('Failed to fetch last active users')
    }

    const data = await res.json()

    return data.items || null
  } catch (error) {
    console.error('Error in fetchLastActiveUsers:', error)
    return null
  }
}
