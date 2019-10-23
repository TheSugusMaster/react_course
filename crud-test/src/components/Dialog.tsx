import React from "react";
import "./Dialog.css";

interface Props {
    open: boolean;
}

const Dialog: React.FC<Props> = (props) => {
    return (
        <>
            {props.open ? (
                <div className="Dialog">
                    {props.children}
                </div>
            ) : null}
        </>
    )
}

export default Dialog;