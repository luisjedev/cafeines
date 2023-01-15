import { useState } from "react"
import { supabase } from "../lib/supaBase";


const Login = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) =>{
    e.preventDefault();
    console.log(`${email}, ${password}`)
    
    try {
      const result = await supabase.auth.signInWithPassword({
        email: email,
        password: password,
      })
      console.log(result)
    } catch (error) {
      console.error(error)
    }
  }

  return(
    <div className="w-full">
      <form onSubmit={handleSubmit} className="p-2 flex justify-center items-center flex-col">
        <input className="border-amber-900 border-2 mb-2 p-1 text-center w-[80%]" 
          placeholder="Email.."
          type="email"
          name="email"
          onChange={e => setEmail(e.target.value)}
        />
        <input className="border-amber-900 border-2 mb-2 p-1 text-center w-[80%]" 
          placeholder="Pass.."
          type="password"
          name="password"
          onChange={e => setPassword(e.target.value)}
        />
        <button className="h-10 w-24 text-white border-2 mt-2 border-amber-900 hover:bg-white hover:text-amber-900 bg-amber-900">
          Enviar
        </button>
      </form>
    </div>
  )
}

export default Login
