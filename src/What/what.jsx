import React from 'react'
import { useNavigate } from 'react-router-dom'

const what = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/why");
    }



    return (
        <div>
            what
            <button onClick={handleClick}>why</button>
        </div>
    )
}

export default what