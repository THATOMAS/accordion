
import React,{useState} from "react"
import data from "./data"
import SingleQuestion from "./SingleQuestion"



const Sheet = ()=>{
    
    
    return<article>
        <div className="Question-box">
            {data.map((question)=>{                
                return <div>
                    <SingleQuestion key={question.id} {...question} />
                    
                </div>
            })}
        </div>
    </article>
}

export default Sheet ;