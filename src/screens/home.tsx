import { FormEvent, useRef } from "react"
import { useChatStore } from "../store/chat"

import { useNavigate } from 'react-router-dom'

function HomeScreen() {
  
  const [ setRoomId, setUsername ] = useChatStore(store => [store.setRoomId, store.setUsername])

  const navigate = useNavigate()

  const room_id_input = useRef<HTMLInputElement>(null)
  const username_input = useRef<HTMLInputElement>(null)

  function handleSignIn(event: FormEvent) {
    event.preventDefault()

    if (!room_id_input.current || !username_input.current) return

    if (!room_id_input.current.value || !username_input.current.value) return

    console.log(room_id_input.current.value, username_input.current.value)

    setRoomId(room_id_input.current.value)
    setUsername(username_input.current.value)

    return navigate('/chat')
  }
  
  return (
    <main className="h-screen w-screen bg-neutral-900 flex flex-col justify-center items-center">
      <form onSubmit={handleSignIn} className="w-5/6 md:w-2/5 lg:w-3/12 flex flex-col items-center gap-4">
        <input ref={room_id_input} placeholder="Código da sala" className="w-full bg-neutral-800 h-10 rounded placeholder-gray-400 text-slate-100 px-4" />
        <input ref={username_input} placeholder="Username" className="w-full bg-neutral-800 h-10 rounded placeholder-gray-400 text-slate-100 px-4" />
        <button type="submit" className="w-full bg-neutral-600 h-10 rounded text-slate-100 px-4 hover:bg-neutral-500 font-bold">Entrar na sala</button>
      </form>
    </main>
  )
}

export { HomeScreen }