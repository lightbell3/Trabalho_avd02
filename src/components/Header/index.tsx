import logoImg from '../../assets/logo-vivo.png';

import { Container, Content } from './styles'

export function Header() {
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="vivo" />
      </Content>
    </Container>
  )
}