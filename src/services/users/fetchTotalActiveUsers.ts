export async function fetchTotalActiveUsers() {
  try {
    const res = await fetch(
      'http://localhost:50000/users?page=1&pageSize=1&status=active'
    )

    if (!res.ok) {
      throw new Error('Failed to fetch total active users')
    }

    const data = await res.json()

    return data.pagination.total || null
  } catch (error) {
    console.error('Error in fetchTotalActiveUsers:', error)
    return null
  }
}