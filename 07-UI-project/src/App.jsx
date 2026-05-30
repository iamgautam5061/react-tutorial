import React from 'react'
import Section1 from './components/section1/Section1';
import Section2 from './components/section2/Section2';

const App = () => {

  const users = [
    {
      img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d29ya2luZyUyMHByb2Zlc3Npb25hbHxlbnwwfHwwfHx8MA%3D%3D",
      intro: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti voluptate dolorum ratione iste consectetur repudiandae.",
      tag: "Satisfied",
      color: "lightblue",
    },
    {
      img: "https://plus.unsplash.com/premium_photo-1668383207188-f5474588d674?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      intro: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti voluptate dolorum ratione iste consectetur repudiandae.",
      tag: "Underserved",
      color: "royalblue",
    },
    {
      img: "https://plus.unsplash.com/premium_photo-1688821130275-5ee422a9d181?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE2fHx8ZW58MHx8fHx8",
      intro: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti voluptate dolorum ratione iste consectetur repudiandae.",
      tag: "Underbanked",
      color: "seagreen",
    },
    {
      img: "https://plus.unsplash.com/premium_photo-1701099216834-d24559a71fd2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDgyfHx8ZW58MHx8fHx8",
      intro: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti voluptate dolorum ratione iste consectetur repudiandae.",
      tag: "Average",
      color: "pink",
    },
  ]

  return (
    <div>
      <Section1 users={users} />
      <Section2 />
    </div>
  )
}

export default App;