

export const Button = ({
  type = 'submit',
  value,
  onClick = undefined
}) => {
  return (
    <button
      className='p-2 rounded shadow bg-gradient-to-b from-indigo-800 to-pink-500 text-white font-bold hover:shadow-xl hover:shadow-amber-400/25 cursor-pointer transition-all'
      type={type} onClick={onClick}>{value}</button>)

}


