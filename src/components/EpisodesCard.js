import React from "react";
import { Card, Icon, Image } from 'semantic-ui-react'


const EpisodesCard = (props) => (
    <Card>
        <Card.Content>
            <Card.Header>{props.episode.name}</Card.Header>
            <Card.Meta>
                <span className='date'>Air Date: {props.episode.air_date}</span>
            </Card.Meta>
            <Card.Description>
                {props.episode.episode}
            </Card.Description>
            <Card.Description>
                {props.episode.url}
            </Card.Description>
        </Card.Content>
        <Card.Content extra>
            <a>
                <Icon name='user' />
                {props.episode.characters.length}
            </a>
        </Card.Content>
    </Card>
)

export default EpisodesCard