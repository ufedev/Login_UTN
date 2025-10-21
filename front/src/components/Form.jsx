
export const Form = ({ children, title, Legend, onSubmit }) => {
  return (
    <div className="flex flex-col justify-center items-center gap-5 p-5 rounded shadow bg-slate-50">
      <h2 className="font-bold text-3xl">{title}</h2>
      <form className="flex flex-col gap-3" onSubmit={onSubmit}>
        {children}
      </form>
      <Legend />
    </div>
  )
}
