import React, {useState} from "react";
import './AutoForm.css';
import { Auto } from "../../models/Auto";
import { tsPropertySignature } from "@babel/types";

interface Props {
    onSave: (auto: Auto) => void;
}

const AutoForm: React.FC<Props> = (props) => {
    const  [auto, setAuto] = useState<Auto>({
        id: 0,
        brand: '',
        model: '',
        year: ''
    });

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        props.onSave(auto);
        e.currentTarget.reset();
    }

    const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        setAuto({...auto, [e.currentTarget.name]: e.currentTarget.value});
    }

    return (
        <form className="AutoForm" onSubmit={handleSubmit}>
            <label htmlFor="brand">Brand</label>
            <input type="text" name="brand" id="brand" onChange={handleChange}></input>
            <label htmlFor="model">Model</label>
            <input type="text" name="model" id="model" onChange={handleChange}></input>
            <label htmlFor="year">Year</label>
            <input type="text" name="year" id="year" onChange={handleChange}></input>
            <input type="submit" value="Save" />
        </form>
    );
}

export default AutoForm;