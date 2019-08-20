import React from "react";
import { Card, Icon, Image } from 'semantic-ui-react'


const LocationCard = (props) => (
  <Card>
    <Card.Content>
      <Card.Header>{props.location.name}</Card.Header>
      <Card.Meta>
        <span className='date'>{props.location.type}</span>
      </Card.Meta>
      <Card.Description>
        {props.location.dimension}
      </Card.Description>
      <Card.Description>
        {props.location.residents.length}
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <a>
        <Icon name='user' />
        {props.location.url}
      </a>
    </Card.Content>
  </Card>
)

export default LocationCard
