import React, { Component } from 'react';

function fieldLabel(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export default (props) =>{
  const errorClass = props.type.touched && props.type.invalid ? 'has-danger' : '';
  return(
    <div className={`form-group ${errorClass}`}>
      <label>{fieldLabel(props.type.name)}</label>
      <input type='text' className="form-control" { ...props.type } />
      <div className="text-help">
        <i>{ props.type.touched ? props.type.error : '' }</i>
      </div>
    </div>
  )
}
