import axios from 'axios';
import { useState, useEffect } from 'react';

type FetchResult<T> = {
    data: T | null 
    error: unknown 
    loading: boolean
    meta: any
}

type HeaderParams = {
    Authorization: string 
}

function useFetch<T>(url: string, headers?: HeaderParams): FetchResult<T>  {
    const [data, setData] = useState<T | null>(null);
    const [meta, setMeta] = useState(null);
    const [error, setError] = useState<unknown>(null);
    const [loading, setLoading] = useState<boolean>(true);

    try {
        useEffect(() => {
            const fetchData = async () => {
                setLoading(true);
                const res = await axios.get(url, {
                    headers: headers
                });

                if (res.status != 200) {
                    setError("failed to fetch data")
                    setLoading(false);
                    return
                }
                setLoading(false);
                setData(res.data.data)
                if(res.data.meta) {
                    setMeta(res.data.meta);
                }
            };

            fetchData();
        }, [url]);

        return { data, loading, error, meta };
    } catch (err) {
        console.error(err)
        setError((err as Error).message)
        return { data, loading, error, meta }
    }
}

export default useFetch;
