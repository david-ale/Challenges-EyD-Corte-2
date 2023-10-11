import { useEffect,useState } from "react";

export const useFetch = (url) => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [hasError, setHasError] = useState(false);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const api = await fetch(url);
          const data = await api.json();
          setData(data);
          setIsLoading(false);
        } catch (error) {
          setHasError(true);
          setIsLoading(false);
        }
      };
  
      fetchData();
    }, [url]);
  
    return { data, isLoading, hasError };
  };
    