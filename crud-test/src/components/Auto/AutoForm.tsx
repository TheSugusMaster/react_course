import React, {useState} from "react";
import './AutoForm.css';
import { Auto, defaultAuto } from "../../models/Auto";
import Dialog from "../Dialog";

interface Props {
    auto? : Auto;
    onSave: (auto: Auto) => void;
}

const AutoForm: React.FC<Props> = (props) => {
    const [auto, setAuto] = React.useState<Auto>(props.auto ? props.auto : defaultAuto);
    const [open, isOpen] = useState(false); 

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        props.onSave(auto);
        toggleDialog(); 
        if(!props.auto){
            setAuto(props.auto ? props.auto : defaultAuto);
        }    
    }

    const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        setAuto({...auto, [e.currentTarget.name]: e.currentTarget.value});
    }

    const toggleDialog = () => {
        isOpen(!open);
    }

    return (
        <>
        <button onClick={toggleDialog}>{props.auto ? 'Edit' : 'Create'}</button>
        <Dialog open={open}>
        <form className="AutoForm" onSubmit={handleSubmit}>
            <label htmlFor="brand">Brand</label>
            <input type="text" name="brand" id="brand" onChange={handleChange} value={auto.brand}></input>
            <label htmlFor="model">Model</label>
            <input type="text" name="model" id="model" onChange={handleChange} value={auto.model}></input>
            <label htmlFor="year">Year</label>
            <input type="text" name="year" id="year" onChange={handleChange} value={auto.year}></input>
            <input type="submit" value="Save" />
        </form>
        <button type="button" onClick={toggleDialog}>Cancel</button>
        </Dialog>
        </>
    );
}

export default AutoForm;