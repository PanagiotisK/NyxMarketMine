import React from "react";

function items(props) {

    return (
        <div className="items" onClick={() => {
            console.log(props.option)
        }}>
            {props.name}
        </div>
    );

}

export default items;