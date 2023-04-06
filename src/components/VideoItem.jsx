import React from 'react'
import styled from 'styled-components'

const LI=styled.li`
    width:50%;
    padding:0.2em;
`;
const VIDEODIV=styled.div`
    width:100%;
    height:100%;
    display:flex;/* 비디오가 한줄만 나오게 처리 display:flex */
    align-items:center;
    border:1px solid lightgray;
    box-shadow:3px 3px 5px 0px rgba(191,191,191,0.55);/* 그림자효과 */
    cursor:pointer;
    transition:transform 250ms easy-in;/* 애니매이션 효과 자연스럽게 */
    &:hover{
        transform:scale(1.04);
    }
`
const DIV=styled.div`
    margin-left:0.2em;
`
const IMG=styled.img`
    width:40%;
    height:100;
`;
//기본사이즈 16  0.8rem = 12.8
const PTITLE=styled.p`
    margin:10; 
    font-size:20px;
`;
const CHANNEL=styled.p`
    margin:10;
    font-size:15px;
`;

const VideoItem = (props) => {
  return (
    <LI>
        <div>
            <VIDEODIV>

            <IMG   src={props.video.snippet.thumbnails.medium.url}alt="video thumbnail"/>
            <DIV>
            <PTITLE>{props.video.snippet.title}</PTITLE>
            <CHANNEL>{props.video.snippet.channelTitle}</CHANNEL>
            </DIV>
            </VIDEODIV>
        </div>
    </LI>
  )
}

export default VideoItem
