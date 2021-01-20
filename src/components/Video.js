import YouTube from 'react-youtube';

function Video(props) {
    return (
      <div className="Video">
          <div className="Video-Container">
          <h1>The Unboxing
          </h1>

          <YouTube
            videoId={'z0yaObhmbrw'}                  // defaults -> null
              containerClassName="Video-Player-Container"
              className="Video-Player"
            />   
          <div className="Video-Container-top"></div>

          </div>
      </div>
    );
  }
  
  export default Video;
  