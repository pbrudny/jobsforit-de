import React from "react";

export default function LoadingGif(props) {
  const loadingGifs = [
    'https://media.giphy.com/media/YMM6g7x45coCKdrDoj/giphy.gif',
    'https://media.giphy.com/media/Ti1fB2AZBhl9AO2dQ0/giphy.gif',
    'https://media.giphy.com/media/JNlrR4FR0LqsnAr6kq/giphy.gif'
  ];
  const loadingGif = loadingGifs[Math.floor(Math.random() * loadingGifs.length)];
  return <img src={loadingGif} style={props.style}/>
}
