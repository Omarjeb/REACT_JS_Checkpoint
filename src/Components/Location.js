import React from 'react'
import Typical from 'react-typical'
const Location = () => {
  return (
    <div>
    <span> our Locations:
       <Typical
        steps={['tunis', 1000, 'france', 500]}
        loop={Infinity}
        wrapper="p"
      />
      </span>
    </div>
  )
}

export default Location
