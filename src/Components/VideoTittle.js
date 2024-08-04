const VideoTittle = ({title,overview})=>{
    return (
       <div className=" w-screen aspect-video pt-[20%] px-6 md:px-24 absolute text-white bg-gradient-to-t from-black " >
         <h1 className="text-4xl font-bold mt-10">{title}</h1>
         <p className="w-1/2 py-6 text-md "> {overview}</p>
         <div>
            <button className="bg-white text-black text-lg rounded-sm p-2 px-4 hover:bg-opacity-85 "> {">"}Play</button>
            <button className="bg-gray-600 text-white text-ld p-2 px-4 mx-4  rounded-sm bg-opacity-80 ">More Info </button>
           
         </div>
       </div>
    )
}
export default VideoTittle;