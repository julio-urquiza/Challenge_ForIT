import { useState, useEffect } from "react"

export function useFetch(url, refresh) {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    if (!url) return

    setLoading(true)
    fetch(url)
      .then((res) => {
        if (!res.ok) throw new Error("Error in fetching data");
        return res.json()
      })
      .then((data) => setData(data))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false))
  }, [refresh])

  return { data, loading, error };
}

export default useFetch;