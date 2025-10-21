
// Type =  text - password - number - date - local-datetime - time - checkbox - email - radio 
// value = Contiene el valor
// onChange = Evento que regitra el cambio y cambia el valor

export const Input = ({ type, name, placeholder, id, title, value, onChange }) => {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id}
        className='font-bold text-sm'
      >{title}</label>
      <input
        className="shadow border-[1px] border-slate-300 rounded p-1"
        id={id}
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>)
}
