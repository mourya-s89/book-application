import React from 'react';

const Books = ({ books }) => {
  return (
    <div>
      {books.map((ele, index) => (
        <div key={index}>
          <h3>{ele.title}</h3>
          <h5>Authors</h5>
          {ele.authors.map((author,index) => (
            <p key={index}>{author}</p>
          ))}
          <p>categories: {ele.category}</p>
        </div>
      ))}
    </div>
  );
};

export default Books;