import React from 'react'
import { useNavigate } from 'react-router-dom'

const why = () => {

    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/what");
    }
  return (
    <div>
        why
        <button onClick={handleClick}>what</button>
    </div>
  )
}

export default why