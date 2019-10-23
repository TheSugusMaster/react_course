import React from "react";
import { Auto } from "../../models/Auto";
import AutoForm from "./AutoForm";

interface Props {
    autos: Auto[],
    onDelete: (auto: Auto) => void;
    onEdit: (auto: Auto) => void;
}

const AutoIndex: React.FC<Props> = (props) => {
    const createDeleteAction = (auto: Auto) => {
        return () => {
            props.onDelete(auto);
        }
    }

    return (
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Brand</th>
                    <th>Model</th>
                    <th>Year</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {props.autos.map(auto => {
                    return (
                        <tr key={auto.id}>
                            <td>{auto.id}</td>
                            <td>{auto.brand}</td>
                            <td>{auto.model}</td>
                            <td>{auto.year}</td>
                            <td>
                                <button onClick={createDeleteAction(auto)}>Delete</button>
                                <AutoForm onSave={props.onEdit} auto={auto} />
                            </td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}

export default AutoIndex;