import { useEffect, useState } from "react";

const useFetch = (url) => {
    const [loading, setLoading] = useState(false);
    const [error , setError] = useState(null)
    const [data, setData] = useState(null)
    useEffect( ()=>{
      const fetchPhoto = async () => {
        setLoading(true)
        const res = await fetch(url)
        const data = await res.json()
        if(!res.ok){
          setError(data.message)
          setLoading(false)
        }else{
          setData(data)
          setLoading(false)
          setError(null)
        }
       
      }
    
      fetchPhoto()
    }, [])

    return {loading, error, data}
    
}

export {useFetch}