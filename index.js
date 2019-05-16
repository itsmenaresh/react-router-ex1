import React, { Component } from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, Link} from "react-router-dom";
import axios from "axios";
import Author from './Author';
import Posts from "./Posts"
import './style.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      posts: [],
      authors: []
    };
  }

  async componentDidMount() {
    const PostResponse = await axios.get("https://jsonplaceholder.typicode.com/posts");
    const AuthorsResponse = await axios.get("https://reqres.in/api/users");
    const posts = PostResponse.data;
    const authors = AuthorsResponse.data.data;
    this.setState({ 
      posts,
      authors
    });
  }

  render() {
    return (
      <div>
      <Router>
        <ul>
          <Link to="/authors">author</Link>&nbsp;
          <Link to="/posts">posts</Link>
        </ul>
        <hr />
        <Route path="/authors" render={()=> <Author authors={this.state.authors}/>} />
        <Route path="/posts" render={()=> <Posts posts = {this.state.posts}/>} />
          
      </Router>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
