import { realizarSorteio } from './realizarSorteio';

describe('dado um sorteio de amigo secreto', () => {
  test('cada participante não sorteie ele mesmo', () => {

    const participantes = [
      'Ana',
      'Catarina',
      'Juliana',
      'Joaõ',
      'Gian',

    ]

    const sorteio = realizarSorteio(participantes)
    participantes.forEach(participante => {
      const amigoSecreto = sorteio.get(participante)
      expect(amigoSecreto).not.toEqual(participante)
    })
  })
})