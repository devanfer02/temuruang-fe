"use client"

import { FieldValues, Path, UseFormRegister } from "react-hook-form";

interface InputProps<T extends FieldValues> {
  label: string;
  name: Path<T>;
  type: string;
  requireMsg?: string;
  placeholder?: string 
  register: UseFormRegister<T>;
  defaultValue?: string | number 
}

export default function Input<T extends FieldValues>({ 
  label, 
  name, 
  type = "text", 
  requireMsg, 
  placeholder = "",
  defaultValue = "",
  register 
}: InputProps<T>) {
  return (
    <div className="mb-3 w-full">
      <label htmlFor={label} className="form-label">{label}</label>
      <input type={type} className="form-control" id="name" placeholder={placeholder} {...register(name, { required: requireMsg})} defaultValue={defaultValue}/>
    </div>
  )
}