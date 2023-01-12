import './main.css'
import {useContext, useEffect, useMemo, useRef, useState} from 'react'
import Adding from './Adding'
import Form from './form'
import { toDoListExp} from './toDoList'

import { toDoListContext } from './contexte'


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
        toDoList.map((t) => {
            if(t.id===props.obj.id){
                console.log("there is a match at"+t.id)
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
    console.log("setting table"+ JSON.stringify(toDoList))
    useEffect(()=>{
        console.log("rerender"+JSON.stringify(toDoList));
        localStorage.setItem('todolist',JSON.stringify(toDoList))
        setToDoList(toDoList)
        console.log("aprés rerender"+toDoList);
    })
    const check = useRef(null)

    const handleCheckBoxClick=(key)=>{
        console.log("a complete state changed"+key)
        toDoList.map((e)=>{
            if(e.id===key){
                console.log('match')
                console.log(check.current.checked)
                e.completed = check.current.checked
                localStorage.setItem('todolist',JSON.stringify(toDoList))
                setToDoList(JSON.parse(localStorage.getItem('todolist')))
            }
        })
        console.log(toDoList)
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
                    {/* <th className='col'>Edit task</th> */}
                    <th className='col'>Remove task</th>
                </tr>
            </thead>
            <tbody>
        {toDoList.map((el)=>
                <tr key={el.id}>
                    <td className='col' >{el.id}</td>
                    <td className='col'>{el.title}</td>
                    <td className='col'>{el.description}</td>
                    <td className='col'>{el.deadeline ? el.deadeline : d.toLocaleDateString()}</td>
                    <td className='col' key={el.id}  ><input type="checkbox" onChange={()=>handleCheckBoxClick(el.id)}  checked={el.completed} ref={check}/></td>
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
    console.log("close request")
    }
    const [toDoList,setToDoList] = useState(JSON.parse(localStorage.getItem('todolist')) ? JSON.parse(localStorage.getItem('todolist')) : toDoListExp)
    useEffect(()=>{
        localStorage.setItem('todolist',JSON.stringify(toDoList))
        // setToDoList(JSON.parse(localStorage.getItem('todolist')))
        console.log("Todo modified"+JSON.stringify(toDoList))
    },[toDoList])
    const onSubmit = (props)=>{          
        setActivated(false)
        if(props.titlep.current.value !==""){
                toDoList.push({id:toDoList.length ? parseInt(toDoList[toDoList.length-1].id)+1 : 1,title:props.titlep.current.value,description:props.descriptionp.current.value,deadeline:props.date.current.value})
            }else{alert("please fill the obligatory field")}
        }
    return<toDoListContext.Provider value={{toDoList,setToDoList}}>
        <div className="container" >
            {!activated ?<> 
            <div className="scrollable">
                <TabledList/>
            </div>
            <Form/> </> : null}
            <Adding handleClick={handleClick3} activated={activated} onSubmit={onSubmit} didM={didM} closehndle={closehandle}/>
        </div>
    </toDoListContext.Provider>
}

export default Main