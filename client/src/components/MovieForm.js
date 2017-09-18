import React from 'react';
import { Form, Header, Button } from 'semantic-ui-react';
import axios from 'axios';

class MovieForm extends React.Component {
  state = { title: '', summary: '', year: '' }

  handleTitle = (e) => {
    this.setState({ title: e.target.value })
  }

  handleSummary = (e) => {
    this.setState({ summary: e.target.value })
  }

  handleYear = (e) => {
    this.setState({ year: e.target.value })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    debugger
    let data = new FormData();
    const { title, summary, year } = this.state;
    data.append('title', title);
    data.append('summary', summary);
    data.append('year', year);
    axios.post('/api/movies', data)
      .then( res => {
        this.props.addMovie(res.data)
        this.setState({ title: '', summary: '', year: '' })
      })
  }

  render() {
    return (
      <div>
        <Header as='h3'>Movie Form</Header>
        <Form onSubmit={this.handleSubmit}>
          <Form.Input
            required
            label="Movie title"
            value={this.state.title}
            onChange={this.handleTitle}
          />
          <Form.TextArea
            required
            label="Summary"
            value={this.state.summary}
            onChange={this.handleSummary}
          />
          <Form.Input
            required
            label="Year Released"
            type="number"
            value={this.state.year}
            onChange={this.handleYear}
          />
          <Form.Button>Submit</Form.Button>
        </Form>
      </div>
    )
  }
}

export default MovieForm;
