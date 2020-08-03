import React, { useState, useEffect,useRef } from 'react';

const Timer = () => {
    const [timer, setTimer] = useState(0)
    const timeRef =  useRef()

    useEffect(() => {
        timeRef.current = setInterval(() => {
            setTimer((prevTimer)=> prevTimer + 1)
        }, 1000)
        return ()=> {
            clearInterval(timeRef.current)
        }
    }, [])
    return (
        <div>
            {timer}
            <button onClick={()=>clearInterval(timeRef.current)}>Pause</button>
        </div>
    )
}

export default Timer