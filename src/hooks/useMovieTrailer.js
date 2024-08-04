import { useEffect } from 'react';
import {useDispatch} from 'react-redux';
import { addTrailerVideos } from '../Utils/moviesSlice';
// import VideoBg from '../Components/VideoBg';

    const useMovieTrailer = (movieId)=>{
        const dispatch = useDispatch();
        const fetchMovieVideos = async (movieId) => {
           
            try {
                const response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=07729dd9513445251aed51016fca22c9`);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                // Filtering data if needed
                const filterData = data.results.filter((video) => video.type === 'Trailer');
                const trailer = filterData.length ? filterData[1] : data.results[0];
                dispatch(addTrailerVideos(trailer));
    
                return data;
            } catch (error) {
                console.error('Fetch movie videos failed: ', error);
                throw error;
            }
        };
    
        useEffect(() => {
            fetchMovieVideos(movieId);
        }, [movieId]);
    
    
}
export default useMovieTrailer