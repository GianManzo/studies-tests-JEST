import React, { useRef, useState } from 'react'
import { useAdicionarParticipante } from '../state/hooks/useAdicionarParticipante'
import { useErro } from '../state/hooks/useErro'
import './Formulario.css'

export const Formulario = () => {

  const [nome, setNome] = useState('')
  const inputRef = useRef<HTMLInputElement>(null)
  const adicionarNaLista = useAdicionarParticipante()
  const mensagemErro = useErro()

  const adicionarParticipante = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    adicionarNaLista(nome)
    setNome('')
    inputRef.current?.focus()
  }

  return (
    <form onSubmit={adicionarParticipante}>
      <div className="grupo-input-btn">
        <input
          ref={inputRef}
          value={nome}
          type="text"
          placeholder="Insira os nomes dos participantes"
          onChange={event => setNome(event.target.value)}

        />
        <button disabled={!nome}>Adicionar</button>
      </div>
      {mensagemErro && <p className="alerta erro" role="alert">{mensagemErro}</p>}
    </form>
  )
}
