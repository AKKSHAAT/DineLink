import { useState, useEffect } from 'react';
import axiosInstance from '../axios.config';

interface FetchResult<T> {
  data: T | null;
  loading: boolean;
  error: Error | null;
}

/**
 * A custom hook for fetching data using Axios.
 *
 * @param url The API endpoint to fetch data from.
 * @param options Optional Axios configurations.
 * @returns An object containing data, loading, and error states.
 */

const useFetch = <T>(url: string, options?: object): FetchResult<T> => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axiosInstance.get<T>(url, options);
        console.log(response.data);
        setData(response.data);
      } catch (err) {
        setError(err as Error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url, options]);

  return { data, loading, error };
};

export default useFetch;
