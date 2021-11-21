
import React from "react"
import data from "./data"
import SingleQuestion from "./SingleQuestion"



const Sheet = ()=>{
    
    
    return<article>
            <h1>Please Help Us Help You . </h1>
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