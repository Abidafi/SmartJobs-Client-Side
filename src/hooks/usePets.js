import axios from "axios"
import { useEffect, useState } from "react"


const usePets = () => {
  const [pet, setPet] = useState ([])
  const [loading, setLoading] = useState (true)
  const [error, setError] = useState (null)

  useEffect(() =>{
    setLoading(true)
    axios('/petData.json')
    .then(data=>setPet(data.data))
    .catch(err=>setError(err))
    .finally(()=> setLoading(false))
  }, [])

  return { pet, loading, error }
}

export default usePets;