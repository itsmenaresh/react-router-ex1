import React from 'react';

export default ({ authors }) => {
  return (
   authors.map(item => {
     return ( <div className="card" style={{width: "18rem"}}>
  <img src={item.avatar} className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">{item.first_name}</h5>
    <p className="card-text">{item.email}</p>
  </div>
  </div>)
   })
  )
};
