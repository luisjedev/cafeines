import { useState } from "react"
import { client } from "../supabase/client";


const Login = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) =>{
    e.preventDefault();
    console.log(`${email}, ${password}`)
    
    try {
      const result = await client.auth.signInWithPassword({
        email: email,
        password: password,
      })
      console.log(result)
    } catch (error) {
      console.error(error)
    }
  }

  return(
    <div>
      <form onSubmit={handleSubmit} className="p-2 flex justify-center items-center flex-col">
        <input className="border-stone-900 border-2 mb-2" 
          placeholder="Email.."
          type="email"
          name="email"
          onChange={e => setEmail(e.target.value)}
        />
        <input className="border-stone-900 border-2 mb-2" 
          placeholder="Pass.."
          type="password"
          name="password"
          onChange={e => setPassword(e.target.value)}
        />
        <button className="w-[50%] border-2 mt-2 border-amber-600">
          Enviar
        </button>
      </form>
    </div>
  )
}

export default Login
