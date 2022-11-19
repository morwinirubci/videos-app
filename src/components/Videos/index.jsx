import style from "./Videos.module.css";
import previewImg from "../../assets/img/img1.png";
import video from "../../assets/videos/ptn_01.mp4";
import InfoVideo from "./InfoVideo";


const Videos = (props) => {


    return (

        <div className={style.videoItems}>
            <div id={props.id} className={style.videoItem}>
                <a data-fancybox="video-gallery" href={video}>
                    <img src={previewImg}  alt="img" />
                </a>

                <InfoVideo title={props.name} subtitle={props.description}/>

            </div>

        </div>

    );

}
export default Videos;