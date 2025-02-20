import React, { useEffect, useState } from 'react'
import Books from './components/Books'

const  App = () =>  {
  const [books,setbooks] =useState([]);
  const [filteredData,setFilteredData] = useState([]);
  // function getData(){
  //   fetch("https://book-backend-krzv.onrender.com/books",{
  //     headers:{
  //       "Authorization":"whatever-you-want"
  //     }
  //   }).then(data =>{
  //     return data.json();
  //   }).then(data =>{
  //     console.log(data);  
  //     setbooks(data);
  //     setFilteredData(data);
  //   }).catch(err =>{
  //     console.log(err);
  //   })
  // }

  function getData() {  
    async function fetchData() {
      try {
        const data = await fetch("https://book-backend-krzv.onrender.com/books", {
          headers: {  
            "Authorization" : "whatever-you-want"
          }
        });
        const finalData = await data.json();
        setbooks(finalData);
        setFilteredData(finalData);
      }
      catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }


  function filterData(text) {
  const inputText = text.toLowerCase().trim();
  const filteredBooksData = books.filter((ele) => {
    const isAuthorPresent = ele.authors.some((author) => {
      const authorName = author.toLowerCase().trim();
      return authorName.startsWith(inputText);
    });
    const tempTitle = ele.title.toLowerCase().trim();
    return tempTitle.startsWith(inputText) || isAuthorPresent;
  });
  setFilteredData(filteredBooksData);
}

  useEffect(() => {
    getData();
  }
  , [])
  return (
    <div>
    <div>
      <input 
      type='text'
      placeholder='Search'
      onChange={(e)=>filterData(e.target
        .value)}
      />
    </div>
    <Books books={filteredData}/>
    </div>
  )
}

export default App