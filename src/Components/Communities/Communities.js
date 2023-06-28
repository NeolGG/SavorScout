import React, {useEffect, useState} from 'react'

export default function Communities() {
  const [communities, setComms] = useState([]) // communities arraya and function that updates communities
  
  // use when we get parse functions

  // useEffect(() =>{
  //   /function goes here/.then((communities) =>{
  //     console.log(communities);
  //     setComms(communities)
  //   });
  // },[]);

  
  return (
    <div>Communities</div>
  )
}
