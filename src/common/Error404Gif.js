import React from "react";

export default function Error404Gif(props) {
  const errorGifs = [
    'https://media.giphy.com/media/TNf5oSRelTeI8',
    'https://media.giphy.com/media/ZUdJFU0tbEpnW',
    'https://media.giphy.com/media/26FPGt0CsPqPAmXg4',
    'https://media.giphy.com/media/l0Iyh3gFEvueA6guI',
    'https://media.giphy.com/media/H4KlAsvtVSaykHv7lY',
    'https://media.giphy.com/media/14uQ3cOFteDaU',
    'https://media.giphy.com/media/9J7tdYltWyXIY',
    'https://media.giphy.com/media/sSmxfWnEVxtWU'
  ];
  const selected = errorGifs[Math.floor(Math.random() * errorGifs.length)];
  const normal = selected + '/giphy.gif';
  const small = selected + '/200w_d.gif';
  const loadingGif = props.small ? small : normal;

  return <img src={loadingGif} style={props.style}/>
}
