import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { TMDB_API_URL } from "../Utils/constant";
import { addNowPlayingMovies } from "../Utils/moviesSlice";

const useNowPlayingMovies = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const response = await fetch(TMDB_API_URL);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                dispatch(addNowPlayingMovies(data.results));
            } catch (error) {
                console.error('Fetch movies failed: ', error);
            }
        };

        fetchMovies();
    }, [dispatch]);
};

export default useNowPlayingMovies;
