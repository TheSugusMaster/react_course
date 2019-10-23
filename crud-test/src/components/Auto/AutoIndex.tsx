import React from "react";
import { Auto } from "../../models/Auto";
import AutoForm from "./AutoForm";
import { Table, Divider, Tag } from 'antd';
import 'antd/dist/antd.css';

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

    const { Column } = Table;

    return (
        <Table dataSource={props.autos}>
            <Column title="ID" dataIndex="id" key="id"/>
            <Column title="Brand" dataIndex="brand" key="brand" />
            <Column title="Model" dataIndex="model" key="model"/>
            <Column title="Year" dataIndex="year" key="year"/>
            <Column title="Actions" key="action" render={auto => (
                <span>
                    <button onClick={createDeleteAction(auto)}>Delete</button>
                    <AutoForm onSave={props.onEdit} auto={auto} />
                </span>
            )} />
        </Table>
    )
}

export default AutoIndex;