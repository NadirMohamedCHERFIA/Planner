import { useRef} from "react"

const Form = ()=>{
    const handleClick= ()=>{
        console.log(title.current.value)
    }
    const title = useRef(null);
    const minContainerRef = useRef(null);
    return <>
        <div className="container min-container disable" ref={minContainerRef}>
            <h1>Modifie the task</h1>
            <div className="close">+</div>
            <label htmlFor="title"> Edit title : </label>
            <input type="text" ref={title} id="title"/>
            <button className="btn btn-primary" onClick={handleClick}>Submit</button>
        </div>
    </>
}

export default Form