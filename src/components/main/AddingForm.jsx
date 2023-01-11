import React from 'react'
import { useRef,useState,useEffect} from 'react'
const AddingForm = (props) => {
    const title = useRef(null);
    const description = useRef(null)
    const dateRef=useRef(null)
    const [mountState,setMounState] =useState(false)
    const [successState,setSuccess] = useState(false)
    const proprities =
        {
            titlep : title,
            descriptionp : description,
            date : dateRef,
            mountStatep : mountState,
            succes: successState
        }
        useEffect(()=>{
            const success = document.querySelector(".success");
            if(successState===true){
                success.classList.add("enable")
                console.log("succes",successState)
        }
    },[successState,props])
    useRef(()=>{
    },[mountState])
    const handleClick =(e)=>{
        e.preventDefault()
        setSuccess(!successState)
        setMounState(!mountState)
        props.didM(proprities)
        props.onSubmited(proprities)
    }
    const handleClickClose = ()=>{
        props.close()
    }
    return <>
    <div className='container'>
        <div className="adding-form">
            <div className="close" onClick={handleClickClose}>+</div>
            <form action="" method='get'>
            <div className='form-element'>
                <label htmlFor="title" >Title( <span style={{color: 'red'}} alt="Obligatory">*</span>): </label>
                <br></br>
                <input type="text" name='title' placeholder='Enter the title' ref={title} require/>
            </div>
            <div className='form-element'>
                <label htmlFor="description" >Description: </label>
                <br></br>
                <textarea type="text" name='description' placeholder='Enter the description' ref={description}/>
            </div>
            <div className='form-element'>
                <label htmlFor="date">Deadline</label>
                <br></br>
                <input type="date" name='date' max="2033-12-31" id="date"  ref={dateRef}/>
            </div>
            <div className="success">
                Succesfully added
            </div>
            <div className='form-element'>
                <button type='submit' className='btn' onClick={handleClick}>Add</button>
            </div>
            </form>
        </div>
    </div>
    </>
}

export default AddingForm