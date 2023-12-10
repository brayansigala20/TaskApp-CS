import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { useAuth } from "../../hooks"
const confirm = () => {
  const { confirm } = useAuth()
  const { token } = useParams()
  useEffect(() => {
    confirm(token)
  }, [])
  const CountdownTimer = () => {
    const [seconds, setSeconds] = useState(30);

    useEffect(() => {
      const countdown = setInterval(() => {
        setSeconds(prevSeconds => prevSeconds - 1);
      }, 1000);
      return () => clearInterval(countdown);
    }, []);

    useEffect(() => {
      if (seconds === 0) {
        window.close()
      }
    }, [seconds]);
    return seconds
  }
  return (
    <div className="border border-teal-500 w-1/3 h-64 flex flex-col gap-5 p-5">
      <label className="text-center mt-10">Usuario confirmado</label>
      <p>Este mensaje se cerrara despues de 20 seg, ya puedes ingresar con tu e-mail y contraseña.</p>
      <div>{CountdownTimer()}</div>
    </div>
  )
}

export default confirm