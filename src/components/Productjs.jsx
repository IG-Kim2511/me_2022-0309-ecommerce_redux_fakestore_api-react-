import React, { useState } from 'react'
import { useParams } from 'react-router-dom'


const Productjs = () => {

    const {id} =useParams('')
    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(false)



  return (
    <div>Productjs</div>
  )
}

export default Productjs