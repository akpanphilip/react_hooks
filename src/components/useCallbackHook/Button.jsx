/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */
import React from "react"
function Button(props) {
    console.log('Hello A')
    return (
        <button onClick={props.handleClick}>
            {props.children}
        </button>
    )
}

export default React.memo(Button)