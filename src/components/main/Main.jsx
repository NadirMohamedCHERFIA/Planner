import './main.css'
import {useContext, useEffect, useState} from 'react'
import Adding from './Adding'
import Form from './form'
import { toDoListExp} from './toDoList'

import { toDoListContext } from './contexte'
const timediff = (date1,date2)=>{
    const date1arr= date1 ? date1.split('-').join('') : ""
    const date2arr= date2 ? date2.split('-').join('') : ""
    return(parseInt(date2arr)-parseInt(date1arr))

}

// const ButtonAdd=()=>{
//     return <>
//         <div className="btn btn-primary">
//             Modify
//         </div>
//     </>
// }
const ButtonRem=(props)=>{
    const{toDoList,setToDoList} = useContext(toDoListContext)
    const handleRemoveClick = ()=>{
        toDoList.forEach((t) => {
            if(t.id===props.obj.id){
                setToDoList(toDoList.filter(element=>element.id!==props.obj.id))
            }
    })
    }
    return <>
        <div className="btn" key={props.obj.id} onClick={handleRemoveClick}>
            Remove
        </div>
    </>
}

const TabledList = ()=>{
    const {toDoList,setToDoList} = useContext(toDoListContext)
    let d = new Date()
    let dString = d.toLocaleDateString().split('/').reverse()
    let normaleDate = dString.join('-')
    useEffect(()=>{
        localStorage.setItem('todolist',JSON.stringify(toDoList))
        setToDoList(toDoList)
    })
    const handleCheckBoxClick=(key)=>{
        toDoList.forEach((e)=>{
            if(e.id===key){
                e.completed = !e.completed
                localStorage.setItem('todolist',JSON.stringify(toDoList))
                setToDoList(JSON.parse(localStorage.getItem('todolist')))
            }
        })
    }
    return <>
        <table>
            <thead className='tableHead'>
                <tr>
                    <th className='col'>Task number</th>
                    <th className='col'>Name</th>
                    <th className='col'>Description</th>
                    <th className='col'>DeadLine</th>
                    <th className='col'>Completed</th>
                    <th className='col'>To deadline</th>
                    <th className='col'>Remove task</th>
                </tr>
            </thead>
            <tbody>
        {toDoList.map((el)=>
                <tr key={el.id} className="tableRow" style={el.completed?{color:'green'}: ((timediff(normaleDate,el.deadeline)===0 || normaleDate,el.deadeline)===1) || isNaN(timediff(normaleDate,el.deadeline)) ? {color:'orange'} :(timediff(normaleDate,el.deadeline)<0) ? {color:'red'} : {color:'var(--color-white)'}}>
                    <td className='col' >{el.id}</td>
                    <td className='col'>{el.title}</td>
                    <td className='col'>{el.description}</td>
                    <td className='col'>{el.deadeline ? el.deadeline : normaleDate}</td>
                    <td className='col' key={el.id}  ><input type="checkbox" onClick={()=>handleCheckBoxClick(el.id)}  checked={el.completed}/></td>
                <td className='col'>{el.completed ? "Done" : timediff(normaleDate,el.deadeline)>=0 ? timediff(normaleDate,el.deadeline)+" days" : isNaN(timediff(normaleDate,el.deadeline)) ? "0 days" : "passed" }</td>
                    {/* <td className='col modifie'  onClick={handleClick(el)} key={el.title} checked={el.colmpleted ? 'checked' : ""}><ButtonAdd/></td> */}
                    <td className='col'><ButtonRem obj={el}/></td>
                </tr>
        )}
            </tbody>
        </table>
        </>
}

const Main = ()=>{
    const handleClick3 = ()=>{
        setActivated(!activated);
    }
    const [activated,setActivated] = useState(false);
    const didM=(props)=>{
    }
    const closehandle = ()=>{
    setActivated(!activated)
    }
    const [toDoList,setToDoList] = useState(JSON.parse(localStorage.getItem('todolist')) ? JSON.parse(localStorage.getItem('todolist')) : toDoListExp)
    useEffect(()=>{
        localStorage.setItem('todolist',JSON.stringify(toDoList))
        },[toDoList])
    const onSubmit = (props)=>{          
        setActivated(false)
        if(props.titlep.current.value !==""){
                toDoList.push({id:toDoList.length ? parseInt(toDoList[toDoList.length-1].id)+1 : 1,title:props.titlep.current.value,description:props.descriptionp.current.value,deadeline:props.date.current.value})
            }else{alert("Cannot add a task with an empty name")}
        }
    return<toDoListContext.Provider value={{toDoList,setToDoList}}>
        <div className="container"  >
            {!activated ?<> 
            <div className="scrollable"style={{backgroundColor:'var(--color-bg-variant)',borderRadius:"1rem"}}>
                <TabledList/>
            </div>
            <Form/> </> : null}
            <Adding handleClick={handleClick3} activated={activated} onSubmit={onSubmit} didM={didM} closehndle={closehandle}/>
        </div>
    </toDoListContext.Provider>
}

export default Main