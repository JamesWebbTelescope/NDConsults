export default async function getServices() {
    try {
      const res = await fetch('https://ndconsults.makeplans.com/services',
        {method: 'GET',
        headers: {
          'User-Agent': 'https://jameswebbtelescope.github.io',
          'Accept': 'application/json'
        }
      })
      const data = await res.json()
      console.log('API Response:', data)
    } catch (error) {
      console.error('Error fetching API:', error)
    }
  }