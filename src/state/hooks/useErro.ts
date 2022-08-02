import { erroState } from './../atom';
import { useRecoilValue } from "recoil"

export const useErro = () => {
  const mensagem = useRecoilValue(erroState)
  return mensagem
}