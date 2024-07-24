import React from 'react'

function Card(props) {
  return (
    <>
    <div className='bg-red-300'>{props.name}</div>
    <div className='bg-red-300'>{props.email}</div>
    <div className='bg-red-300'>{props.id}</div>
    </>

  )
}

export default Card