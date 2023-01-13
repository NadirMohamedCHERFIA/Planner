import AddingForm from "./AddingForm"
import scanMe from './../../assets/images/scanme.png'
const Adding = (props)=>{
    return <>
        <div className="container">
            <div className="adding">
                {!props.activated ? <>
                <button className="btn btn-primary" onClick={props.handleClick} style={props.activated ? {backgroundColor:'red',color:'white',border:'none'}: {}}>{props.activated ?  "Cancel":"Add a task" }</button> <br></br>
                <span style={{color:'var(--color-orange'}}> important : Data is stored in the localStorage</span>
                <br></br>
                <div className="scanme"><img src={scanMe} alt="" /></div>
                <div className="description" style={{color:'var(--color-light'}}>
                    A simple ToDo list app that i've created to better organise my daily work and asseignements that i would love to share it with you, enjoy it.
                </div>
                <div>
                &copy; Copyright 2023 Cherfia Mohamed Nadir 
                </div>
                </>
                : null}
                {props.activated ? <AddingForm onSubmited={props.onSubmit} didM={props.didM} close={props.closehndle}/> : null}
            </div>
        </div>
    </>
}
export default Adding