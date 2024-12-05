import { FieldValues, Path, UseFormRegister } from "react-hook-form";

interface SelectProps<T extends FieldValues>{
  label: string;
  name: Path<T>;
  requireMsg?: string;
  placeholder?: string 
  register: UseFormRegister<T>;
  defaultValue?: string | number
  options: string[]
}

export default function Select<T extends FieldValues>({
  label, 
  name, 
  requireMsg, 
  register ,
  options = []
}: SelectProps<T>) {
  return (
    <div className="mb-3">
      <label htmlFor={name} className="form-label">{label}</label>
      <select className="form-select" id={name} {...register(name, { required: requireMsg})}>
        { options.map(option => (
          <option value={option} key={option}>{option}</option>
        ))}
      </select>
    </div>
  )
}