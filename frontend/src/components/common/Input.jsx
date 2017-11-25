import React from "react"

export const TextInput = (props) => {
    return <input type="text"
      id={props.name}
      className="form-control"
      value={props.value || ''}
      onInput={(e) => props.onStateChange({[props.name]: e.target.value})} />
}
