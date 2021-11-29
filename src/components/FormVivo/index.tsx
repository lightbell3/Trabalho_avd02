import {Container} from './styles'
import { Button } from '../Button'
export function FormVivo() {
  return (
  <Container>
    <form>
        <label >Nome: </label><br/>
        <input type="text" id="name" name="name"/><br/>
        <label >Email: </label><br/>
        <input type="text" id="email" name="email"/>
        < Button/>
    </form>
  </Container>
  
  )}