import AddingForm from "./AddingForm"
const Adding = (props)=>{
    return <>
        <div className="container">
            <div className="adding">
                {!props.activated ? <>
                <button className="btn btn-primary" onClick={props.handleClick} style={props.activated ? {backgroundColor:'red',color:'white',border:'none'}: {}}>{props.activated ?  "Cancel":"Add a task" }</button> <br></br>&copy; Copyright 2023 Cherfia Mohamed Nadir </> : null}
                {props.activated ? <AddingForm onSubmited={props.onSubmit} didM={props.didM} close={props.closehndle}/> : null}
            </div>
        </div>
    </>
}
export default Adding