// fetchMovies
// fetchMovieDetails

import { useEffect, useState } from "react";

// useFetch(fetchMovies)
// useFetch(fetchMovieDetails)

const useFetch = <T>(fetchFunction: () => Promise<T>, autoFetch = true) => {
    const [data, setData] = useState<T | null>(null);
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState<Error | null>(null);


    /*************  ✨ Codeium Command 🌟  *************/
    const fetchData = async () => {
        setLoading(true);
        setError(null);
        try {
            setLoading(true);
            setError(null);


            const result = await fetchFunction();
            /******  856e10ef-8b8f-45dd-8eee-ce609b3829c7  *******/
            setData(result);
        } catch (error) {
            //@ts-ignore
            setError(error instanceof Error ? error : new Error('An error occurred'));
        } finally {
            setLoading(false);
        }
    }

    const reset = () => {
        setData(null);
        setError(null);
        setLoading(false);
    }

    useEffect(() => {
        if (autoFetch) {
            fetchData();
        }
    }, []);

    return { data, loading, error, refetch: fetchData, reset };

};


export default useFetch;