import {memo, useEffect} from "react"


const FetchData = memo(({setData})=>{
        fetch("https://s3.amazonaws.com/open-to-cors/assignment.json").then((res)=>res.json()).then(data=>{
        let id=0
        let newArr= Object.values(data['products'])
        newArr.sort((a,b)=>{
                return parseInt(b['popularity'])-parseInt(a['popularity'])})

        newArr=newArr.map((item)=>{
                id+=1;
                return {'id':id,
                        'orderItem' : item}  
        }
        ) 
        setData(newArr)       
      
        })
})

export default FetchData