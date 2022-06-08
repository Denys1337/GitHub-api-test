import React, { DetailedHTMLProps, InputHTMLAttributes } from 'react'

interface InputProps extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>{}

const Input = (props:InputProps):JSX.Element => {

  return (
    <input {...props}/>
  );
};

export default Input;
