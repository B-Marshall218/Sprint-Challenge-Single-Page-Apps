import React from "react";
import { Card, Icon, Image } from 'semantic-ui-react'


const CharacterCard = (props) => (
  <Card>
    <Image src={props.character.image} wrapped ui={false} />
    <Card.Content>
      <Card.Header>{props.character.name}</Card.Header>
      <Card.Meta>
        <span className='date'>Joined in 2015</span>
      </Card.Meta>
      <Card.Description>
        {props.character.origin.name}
      </Card.Description>
      <Card.Description>
        {props.character.name}
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <a>
        <Icon name='user' />
        Episodes
      </a>
    </Card.Content>
  </Card>
)

export default CharacterCard
