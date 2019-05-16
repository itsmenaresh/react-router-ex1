import React from "react";

class Posts extends React.Component {
  handleClick = e => {
    console.log(e.currentTarget.innerText)
  }
  render() {
    const {posts} = this.props;
    return (
      <ul className="list-group">
      {posts.map(item => {
        return <li style={{cursor: "pointer"}} key = {item.id} className="list-group-item" onClick={this.handleClick}>{item.title}</li>
      })}
      </ul>
    )
  }
}

export default Posts;