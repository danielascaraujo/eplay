import Tag from '../Tag'

import { Card, Description, Title } from './styles'

const Product = () => (
  <Card>
    <img src="//placehold.it/222x250" />
    <Title>Nome do jogo</Title>
    <Tag>Categoria</Tag>
    <Tag>Windows</Tag>
    <Description>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi ipsam
      nulla tempore minus maxime consequuntur sapiente magnam nostrum aperiam
      quae ab excepturi, quaerat error provident deserunt quibusdam odit eius
      ea!
    </Description>
  </Card>
)

export default Product
