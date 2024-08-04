import VideoBg from "./VideoBg";
import VideoTittle from "./VideoTittle";
import { useSelector } from "react-redux";

const MainContainer = () => {
    const movies = useSelector((store) => store.movies?.nowPlayingMovies);

    if (!movies) return <div>Loading...</div>;

    const mainMovie = movies[0];
    const { original_title, overview, id } = mainMovie;

    console.log("Main movie ID:", id); // Check if the id is defined here

    return (
        <div>
          
            <VideoTittle title={original_title} overview={overview} movieId={id} />
            <VideoBg movieId={id} />
            
        </div>
    );
};

export default MainContainer;
