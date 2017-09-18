import React from 'react';
import { Card, Button } from 'semantic-ui-react';

const Movie = ({ id, title, summary, year, deleteMovie }) => (
  <Card>
    <Card.Content>
      <Card.Header>Title: {title}</Card.Header>
    </Card.Content>
    <Card.Content>
      <Card.Description>Summary: {summary}</Card.Description>
    </Card.Content>
    <Card.Content>
      <Card.Meta>
        Year Released: {year}
      </Card.Meta>
    </Card.Content>
    <Card.Content>
      <Button color='blue'>Edit</Button>
      <Button color= 'red' onClick={() => deleteMovie(id)}>Delete</Button>
    </Card.Content>
  </Card>
)

export default Movie;
