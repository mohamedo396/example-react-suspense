import React from 'react'

// eslint-disable-next-line react/prop-types
export const Num=({resource})=>{
  // eslint-disable-next-line react/prop-types
  const n=resource.num.read();
  return <div>Your random number is: {n}</div>
}