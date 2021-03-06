import React from 'react';
import {connect} from 'react-redux';
import {checkLogin, createPost, fetchPosts} from '../actions';
import Container from 'muicss/lib/react/container';
import Form from 'muicss/lib/react/form';
import Input from 'muicss/lib/react/input';
import Textarea from 'muicss/lib/react/textarea';
import Button from 'muicss/lib/react/button';

import './styles/Global.css';

class CreatePost extends React.Component {
    state = {
        body: '',
        tags: []
    };

  Submit(event) {
    event.preventDefault()
    const { body } = this.state;
    const tags = body.match(/#\w+/g) || [];
    const data = {body, tags};
    this.props.createPost(data);

  }
  render() {
    return (
      <Container>
        <Form onSubmit={this.Submit.bind(this)} className="form">
          <legend>What is in your mind?</legend>
          <Textarea placeholder="Body"
            onChange={(e) => this.setState({body:  e.target.value})}
            className="text-area"/>
          <Button variant="raised" color="primary">Post</Button>
        </Form>
        <div>
          {null}
        </div>
      </Container>
    );
  }
}


export default connect(null, {checkLogin, createPost, fetchPosts})(CreatePost);
