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

  export const getTimeSlots = async () => {
    try {
      const res = await fetch('https://ndconsults.makeplans.com/services/29755/slots',
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

export const goToBookingPage = () => {
  const bookingUrl = `https://ndconsults.makeplans.com/`
  window.open(bookingUrl, '_blank')
}