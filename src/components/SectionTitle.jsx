import React from 'react'

const SectionTitle = ({text}) => {
  return (
    <div className=" border-b border-gray-700 pb-5">
        <h2 className=" text-3xl font-medium tracking-wide capitalize text-yellow-500">
          {text}
        </h2>
      </div>
  )
}

export default SectionTitle