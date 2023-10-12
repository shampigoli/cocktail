
function Spotify() {
    const cleint_id='e49bb0c7bdcc472f889007f2361a3a10';
    const redirect_uri ='http://localhost:3000';
    const url= 'https://accounts.spotify.com/authorize';
    const response_type='code';

  return (
    <>
    <h1>Spotify React</h1>
    <a href="https://accounts.spotify.com/en/authorize?client_id=e49bb0c7bdcc472f889007f2361a3a10&redirect_uri=https://localhost:5174&response_type=token">Login to</a>
    <a href={`${url}?client_id=${cleint_id}&redirect_uri=${redirect_uri}&response_type=${response_type}`}>Login to spotify</a>
    </>
  )
}

export default Spotify