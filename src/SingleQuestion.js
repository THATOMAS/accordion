import React,{useState} from "react"

import {AiFillPlusCircle,AiFillMinusCircle} from "react-icons/ai"




const Info = ({id,info,title})=>{
    const [index,setIndex] = useState(0)
    const [toggle,setToggle] = useState(false)
    const icons = [<AiFillPlusCircle/>,<AiFillMinusCircle/>] 
    const changeIcon = ()=>{
        if (index === 0){
            setIndex(1)
            setToggle(!toggle)
        }
        if (index === 1){
            setIndex(0)
            setToggle(false)
        }
    }
    


return <div className="titlebox">
<h4>{title}</h4>
<button onClick={changeIcon}>{icons[index]}</button>
<p>{toggle ? info:<></>}</p>
</div>
}

export default Info