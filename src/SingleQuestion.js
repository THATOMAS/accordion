import React,{useState} from "react"

import {AiFillPlusCircle,AiFillMinusCircle} from "react-icons/ai"




const Info = ({id,info,title})=>{
    const [showInfo,setShowInfo] = useState(false)
    


return <div className="titlebox">
<h4>{title}</h4>
<button onClick={()=>setShowInfo(!showInfo)}>{showInfo? <AiFillMinusCircle/> : <AiFillPlusCircle/>}</button>
<p>{showInfo && info}</p>
</div>
}

export default Info