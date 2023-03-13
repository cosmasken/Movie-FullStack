import axios from 'axios';
import { useEffect, useState } from 'react';

export function useAxios<T>(url: string): [T | null, boolean, Error | null] {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    let isMounted = true;
    setLoading(true);

    axios
      .get<T>(url)
      .then((response) => {
        if (isMounted) {
          setData(response.data);
        }
      })
      .catch((error) => {
        if (isMounted) {
          setError(error);
        }
      })
      .finally(() => {
        if (isMounted) {
          setLoading(false);
        }
      });

    return () => {
      isMounted = false;
    };
  }, [url]);

  return [data, isLoading, error];
}
