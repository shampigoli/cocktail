import { useEffect, useState } from 'react';
import axios from 'axios';
// const API_KEY = 'AIzaSyCP88PEFyxg4P7TQpYcLfol1SDXJKU4UUo';
// const apiKey='3bc7bdc1c7mshd59dad7435e0c27p1eafa3jsn71b9c7cf1d6f'
// const API_URL = `https://www.googleapis.com/youtube/v3?key=AIzaSyCP88PEFyxg4P7TQpYcLfol1SDXJKU4UUo`;
const apiUrl='https://youtube-v31.p.rapidapi.com/captions?key=3bc7bdc1c7mshd59dad7435e0c27p1eafa3jsn71b9c7cf1d6f';

function Test() {
    const [videos, setVideos] = useState([]);
    // const [nextPageToken, setNextPageToken] = useState('');
    // const [loading, setLoading] = useState(true);

    useEffect(() => {
      async function fetchVideos(){
        const response= await fetch(apiUrl);
        const data=await response.json();
        console.log(data)
  setVideos(data.responce.url)

      }
        fetchVideos('');
    }, []);

    // const fetchVideos = (pageToken) => {
    //     setLoading(true);
    //     axios  
    //         .get(API_URL, {
    //             params: {
    //                 key: API_KEY,
    //                 q: 'Your search query', // Replace with your search query
    //                 type: 'video',
    //                 part: 'snippet',
    //                 maxResults: 100000, // Adjust as needed
    //                 pageToken: pageToken,
    //         },
    //         })
    //         .then((response) => {
    //             setVideos([...videos, ...response.data.items]);
    //             setNextPageToken(response.data.nextPageToken);
    //             setLoading(false);
    //         })
    //         .catch((error) => {
    //             console.error('Error fetching data from YouTube API:', error);
    //             setLoading(false);
    //         });
 
    // };
    // const handleScroll = () => {
    //     if (
    //         window.innerHeight + document.documentElement.scrollTop ===
    //         document.documentElement.offsetHeight
    //     ) {
    //         if (nextPageToken) {
    //             fetchVideos(nextPageToken);
    //         }
    //     }
    // };
    // useEffect(() => {
    //     fetchVideos('');
    // }, []);

  return (
    <div>
    <div className="bg-gray-800 p-4">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <img
              className="w-12 h-12 mr-2"
              src="https://www.gstatic.com/webp/gallery/1.jpg"
              alt="YouTube Logo"
            />
            <span className="text-white text-xl font-bold">YouTube</span>
          </div>
          <div className="flex items-center">
            <input
              type="text"
              className="bg-gray-700 text-white px-4 py-2 rounded-md mr-2"
              placeholder="Search"
            />
            <button className="bg-red-600 text-white px-4 py-2 rounded-md">
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
        <div className="App " >
            <h1>YouTube Video List</h1>
            <div className='flex container-fluid  mx-auto'>
            <ul className='list-unstyled flex container-fluid gap-4 mx-auto'>
                {videos.map((video) => (
                    <li key={video.id.videoId} className=''>
                        <img src={video.snippet.thumbnails.medium.url} alt={video.snippet.title} />
                        <h3 className=''>{video.snippet.title}</h3>
                    </li>
                ))}
            </ul>
            </div>
            {loading && <p>Loading...</p>}
            <div onClick={handleScroll}></div>
        </div>
    </div>
  )
}

export default Test
// import axios from "axios";
// const options = {
//   method: 'GET',
//   url: 'https://youtube-v31.p.rapidapi.com/captions',
//   params: {
//     part: 'snippet',
//     videoId: 'M7FIvfx5J10'
//   },
//   headers: {
//     'X-RapidAPI-Key': '3bc7bdc1c7mshd59dad7435e0c27p1eafa3jsn71b9c7cf1d6f',
//     'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
//   }
// };

// try {
// 	const response = await fetch(options);
// 	console.log(response.data);
// } catch (error) {
// 	console.log(error);
// }