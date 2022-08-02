import React from 'react'
import Card from '../Card'
import { Formulario } from '../Formulario'
import { ListaParticipantes } from '../ListaParticipantes'
import { Rodape } from '../Rodape'

export const Configuracao = () => {
  return (
    <>
      <Card>
        <section>
          <h2>Vamos começar!</h2>
          <Formulario />
          <ListaParticipantes />
          <Rodape />
        </section>
      </Card>
    </>
  )
}
