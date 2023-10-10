import { useState, useEffect } from 'react';
const useCustomFetch = (url) => {
  const [dataState, setDataState] = useState({
    data: null,
    loading: true,
    error: null,
  })
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url)
        if (!response.ok) {
          throw new Error('Error de red')
        }
        const data = await response.json()
        setDataState({
          data: data,
          loading: false,
          error: null,
        })
      } catch (error) {
        setDataState({
          data: null,
          loading: false,
          error: error.message,
        })
      }
    }
    fetchData();
  }, [url])
  return dataState;
}
export default useCustomFetch;

