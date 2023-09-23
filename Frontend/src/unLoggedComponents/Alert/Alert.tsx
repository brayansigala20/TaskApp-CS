interface IProps {
    err:boolean;
    msg:string
}
const Alert = ({err, msg}:IProps) => {
  return (
    <div className={`${err? ' bg-red-600':'bg-green-400'} border border-teal-500 `}>
        <p>{msg}</p>
    </div>
  )
}

export default Alert