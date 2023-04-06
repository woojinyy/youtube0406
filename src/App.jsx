import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import VideoList from "./components/VideoList";

const App=()=> {
  const [videos,setVideos]=useState([])
  console.log('App')
//https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyBDEIy9NwR-tkmaC0REb_yWytU9IDrzP9E
  const[params,setParams]=useState({
    part:'snippet',
    chart:'mostPopular',
    maxResults:25,
    key:"AIzaSyBDEIy9NwR-tkmaC0REb_yWytU9IDrzP9E"
  })//첫번째 인자를 useEffect 의존성 배열에 넣을 수 있다
  useEffect(()=>{
    console.log('uesEffect')
    axios.get('https://youtube.googleapis.com/youtube/v3/videos?',{params})
    .then(result=>{
      console.log(result.data.items)
      //useState에 담기 
      setVideos(result.data.items)

    }).catch(error=>console.log(error))
    
  },[])
  /* 확인한 내용
  상태훅이 변경되면 그때마다 자동호출
  console.log(videos)
  */
 return (
   <>
    {/* useState에 담은 배열 videoList에 props로 넘기기 */}
    <VideoList videos={videos}/>
    </>
  )
}

export default App;
