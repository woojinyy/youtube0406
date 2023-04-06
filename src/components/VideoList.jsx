import React from 'react'
import VideoItem from './VideoItem'
import styled from 'styled-components'

const UL =styled.ul`
  display:flex;
  flex-wrap:wrap;
  list-style:none;
  padding-left:0px;
  margin:0;

`;
const VideoList = ({videos}) => {
  //넘어온 props확인
  console.log(videos)
  return (
    <UL>
      {
        videos.map(video=>(
          <VideoItem key = {video.id} video = {video} title={video.snippet.title}/>
       /*   `${video.id}`,
         `${video.snippet.channelId}`,
         `${video.snippet.title}` */
        ))
        
      }
     
      App에서 VideoList로 videos배열 props로 넘기기
    </UL>
  )
}

export default VideoList
