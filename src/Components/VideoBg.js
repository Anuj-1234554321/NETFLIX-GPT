import {useSelector} from 'react-redux';
import useMovieTrailer from '../hooks/useMovieTrailer';
const VideoBg = ({movieId}) => {   
    const trailerVideo =  useSelector(store=>store.movies?.trailerVideos)
    useMovieTrailer(movieId);

    return (
        <div className=''>
            {/* Render your video or any other JSX here */}
            <iframe className='w-screen aspect-video'
             src={"https://www.youtube.com/embed/"+trailerVideo?.key +"?&autoplay=1&mute=1"}
              title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                 referrerPolicy="strict-origin-when-cross-origin" allowFullScreen>
                    
                </iframe>
        </div>
    );
};

export default VideoBg;