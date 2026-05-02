import { useState } from "react"
import "./style.css"

const Random = ()=>
{

    const[Number,setNumber] = useState(null)

    const generate = ()=>
    {
        const random = Math.floor(Math.random()*100)+1
        setNumber(random)
    }
    return(
        <div className="main">
        <h1>Generate Random Number</h1>
        <div className="container">

            <h1>Generate Me</h1>
            {
                Number===null?<p style={{color:"red", fontWeight:"bold"}}>No number generated yet</p>:<h2>{Number}</h2>
            }
            
            <button onClick={generate}>Generate Random</button>

        </div>
    </div>
    )

}


export default Random