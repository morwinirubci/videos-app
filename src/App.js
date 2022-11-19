import style from './App.module.css';
import Videos from "./components/Videos";


function App(props) {

    let videosElement = props.videos.videos.map(newVideo => <Videos id={newVideo.id} name={newVideo.name} description={newVideo.description}/>)

  return (
          <div className={style.container}>
              <div className={style.videoItems}>

            {videosElement}

            </div>

        </div>
  );
}

export default App;
