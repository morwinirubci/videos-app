import style from './App.module.css';
import Videos from "./components/Videos";
import axios from 'axios';
import {useState, useEffect} from 'react';

const src = 'https://8a975a57-d038-4333-beaf-71ebcb63883d.mock.pstmn.io/test';

function App(props) {

    const [videos,setVideos] = useState([]);
debugger
    useEffect (() => {
        axios
        .get(src)
        .then(data => {
            setVideos(data.data.videos)
        });
    }, []);



  return (

          <div className={style.container}>
              {videos.map(video => {
                  return (
                          <Videos id={video.id} name={video.name} description={video.description}/>
                  )
              })}

        </div>
  );
}

export default App;
