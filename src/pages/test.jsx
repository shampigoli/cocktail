import {useState,useEffect} from 'react'

function Test() {
  const [searchQuery,setSearchQuery]=useState("")
  const [videos, setVideos] = useState([]); // State to store video data

  const apiKey = `AIzaSyAS88zJ7pzPID4v7chRbKPfHh6l4W5BqKI`;
  // searchQuery = "gaming";

  const apiUrl = `https://www.googleapis.com/youtube/v3/search?part=snippet&key=${apiKey}&maxResults=50`;

  useEffect(() => {
    async function fetchVideos() {
      try {
        const response = await fetch(apiUrl);
        // console.log(response);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log(data);
        setVideos(data.items); // Set the video data to the state
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
    fetchVideos();
  }, []);
  const handleClick = async (e) => {
    e.preventDefault();
    const url2 =`https://www.googleapis.com/youtube/v3/search?part=snippet&q=${searchQuery}`;

    try {
      const res = await fetch(url2);
      const data = await res.json();
      console.log(data);
      setVideos(data.items);
    } catch (error) {
      console.log(error);
    }
  };

  // function truncateText(text, maxLength) {
  //   if (text.length <= maxLength) {
  //     return text;
  //   }
  //   return text.slice(0, maxLength) + "...";
  // }
  return (
    <div>
    <nav className='flex justify-between items-center  h-24 w-full p-[40px] pt-[20px]'>
      <img src="/public/yt-logos.png" alt="" className='h-14 w-36' />
      <div className='md:w-[550px] flex justify-between items-center'>
      <div className='flex justify-between items-center h-[44px] m-[12px] border-[1px]  md:w-[500px] rounded-[20px] border-gray-500 pt-3 pb-3' onClick={handleClick}>
      <input
               className='h-[30px] m-[12px] md:w-[500px] border-none p-5 pl-0 outline-none bg-transparent  text-gray-500'
            type="text"
            maxLength={50}
            placeholder='Search'
            onChange={(e) => {
              setSearchQuery(e.target.value);
            }}
            />
            <button className='bg-gray-300 text-gray-400 p-[9px] btn'>
            <i className="bi bi-search"></i>
            </button>
      </div>
      <button className='mic bg-gray-300 h-[20px] w-[20px]'>
      <i className="bi bi-mic-fill"></i>
      </button>

      </div>
      {/* create logo */}
      <div className='w-[150px] flex justify-between items-center'>
      <div className='flex flex-col mt-5'>
      <i className="bi bi-camera-video text-2xl"></i>
      <small>Create</small>
      </div>
      <i className="bi bi-bell text-2xl"></i>
      <div className='signin'>A</div>
      </div>
      {/* <div className='flex space-x-4 ml-auto mr-2 mb-10 '>
      </div> */}
    </nav>
    <div className='container'>
    {/* sidebar */}
    <div className='sidebar w-10 flex flex-col z-10'>
    <i className="bi bi-list text-2xl font-light"></i>
    <i className="bi bi-house-fill text-2xl"></i>
    <small className='ml-[-5px]'>Home</small>
    <i className="bi bi-caret-right-square text-2xl mt-8"></i>
    <small className='ml-[-5px]'>Shorts</small>
    <i className="bi bi-collection-play-fill text-2xl mt-8"></i>
    <small className='ml-[-20px]'>Supscriptions</small>
    <i className="bi bi-youtube text-2xl mt-8"></i>
    <small className='ml-[-7px]'>Library</small>
    </div>
    <div className='flex flex-wrap gap-2 justify-center items-center mt-10'>
  {videos?.map((item)=>{
    return(
      <>
      <div className='flex flex-col items-center justify-center mt-10 '>
      <img src={item.snippet.thumbnails.high.url} alt="" className='w-[340px] h-64 rounded-lg'/>
      <h1 className='w-80 h-[20px] overflow-hidden font-bold'>{item.snippet.title}</h1>
      <div className='flex w-[340px] mt-2 justify-center items-center'>
      <i className="bi bi-person-circle"></i>
      <h3 className='w-80 ml-[30px]'>{item.snippet.channelTitle}</h3>
      </div>
      {/* <div className='w-80 h-36 p-3'>{item.snippet.description}</div> */}

      </div>
      </>
    )
  })}
</div>      
    {/* nav */}
    <div className='flex justify-center items-center'></div>
        
    </div>

    </div>
  )
}

export default Test
{/* <div className='flex justify-between items-center w-full'>
      <h3>Latest</h3>
      <div>
        Manage
      </div>
    </div> */}