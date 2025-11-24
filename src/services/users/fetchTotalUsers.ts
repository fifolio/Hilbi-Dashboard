export async function fetchTotalUsers() {
  try {
    const res = await fetch(
      'http://localhost:50000/users?page=1&pageSize=1'
    )

    if (!res.ok) {
      throw new Error('Failed to fetch total users')
    }

    const data = await res.json()

    return data.pagination.total || null
  } catch (error) {
    console.error('Error in fetchTotalUsers:', error)
    return null
  }
}
