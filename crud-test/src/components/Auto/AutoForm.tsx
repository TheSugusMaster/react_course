import React, {useState} from "react";
import './AutoForm.css';
import { Auto, defaultAuto } from "../../models/Auto";
import Dialog from "../Dialog";

interface Props {
    onSave: (auto: Auto) => void;
}

const AutoForm: React.FC<Props> = (props) => {
    const [auto, setAuto] = React.useState<Auto>(defaultAuto);
    const [open, isOpen] = useState(false); 

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        props.onSave(auto);
        e.currentTarget.reset();     
    }

    const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        setAuto({...auto, [e.currentTarget.name]: e.currentTarget.value});
    }

    const toggleDialog = () => {
        isOpen(!open);
    }

    return (
        <>
        <button onClick={toggleDialog}>Create</button>
        <Dialog open={open}>
        <form className="AutoForm" onSubmit={handleSubmit}>
            <label htmlFor="brand">Brand</label>
            <input type="text" name="brand" id="brand" onChange={handleChange}></input>
            <label htmlFor="model">Model</label>
            <input type="text" name="model" id="model" onChange={handleChange}></input>
            <label htmlFor="year">Year</label>
            <input type="text" name="year" id="year" onChange={handleChange}></input>
            <input type="submit" value="Save" />
        </form>
        <button type="button" onClick={toggleDialog}>Cancel</button>
        </Dialog>
        </>
    );
}

export default AutoForm;