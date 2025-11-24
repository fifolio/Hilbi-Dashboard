export async function fetchTotalInactiveUsers() {
  try {
    const res = await fetch(
      'http://localhost:50000/users?page=1&pageSize=1&status=inactive'
    )

    if (!res.ok) {
      throw new Error('Failed to fetch total inactive users')
    }

    const data = await res.json()

    return data.pagination.total || null
  } catch (error) {
    console.error('Error in fetchTotalInactiveUsers:', error)
    return null
  }
}