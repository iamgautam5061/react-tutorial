import Card from './components/Card'

const App = () => {

  const jobOpenings = [
    {
      brandLogo: "https://media.wired.com/photos/5926ffe47034dc5f91bed4e8/3:4/w_960,c_limit/google-logo.jpg",
      companyName: "Google",
      datePosted: "5 days ago",
      post: "Frontend Software Engineer",
      tag1: "Full-Time",
      tag2: "Junior-Level",
      pay: "$72/hr",
      location: "San Francisco, CA"
    },
    {
      brandLogo: "https://substackcdn.com/image/fetch/$s_!G1lk!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F8ed3d547-94ff-48e1-9f20-8c14a7030a02_2000x2000.jpeg",
      companyName: "Apple",
      datePosted: "2 weeks ago",
      post: "iOS Developer",
      tag1: "Full-Time",
      tag2: "Senior-Level",
      pay: "$95/hr",
      location: "Cupertino, CA"
    },
    {
      brandLogo: "https://pngimg.com/uploads/meta/meta_PNG12.png",
      companyName: "Meta",
      datePosted: "3 days ago",
      post: "React Native Engineer",
      tag1: "Part-Time",
      tag2: "Mid-Level",
      pay: "$68/hr",
      location: "New York, NY"
    },
    {
      brandLogo: "https://cdn.iconscout.com/icon/free/png-512/free-amazon-logo-icon-svg-download-png-461766.png?f=webp&w=512",
      companyName: "Amazon",
      datePosted: "1 week ago",
      post: "Cloud Support Engineer",
      tag1: "Full-Time",
      tag2: "Junior-Level",
      pay: "$58/hr",
      location: "Seattle, WA"
    },
    {
      brandLogo: "https://images.ctfassets.net/4cd45et68cgf/Rx83JoRDMkYNlMC9MKzcB/2b14d5a59fc3937afd3f03191e19502d/Netflix-Symbol.png?w=700&h=456",
      companyName: "Netflix",
      datePosted: "10 days ago",
      post: "Backend Engineer",
      tag1: "Full-Time",
      tag2: "Senior-Level",
      pay: "$110/hr",
      location: "Los Angeles, CA"
    },
    {
      brandLogo: "https://cdn-icons-png.flaticon.com/128/732/732221.png",
      companyName: "Microsoft",
      datePosted: "4 weeks ago",
      post: "AI Research Intern",
      tag1: "Internship",
      tag2: "Entry-Level",
      pay: "$40/hr",
      location: "Redmond, WA"
    },
    {
      brandLogo: "https://img.icons8.com/?size=100&id=FBO05Dys9QCg&format=png",
      companyName: "OpenAI",
      datePosted: "6 days ago",
      post: "Machine Learning Engineer",
      tag1: "Full-Time",
      tag2: "Senior-Level",
      pay: "$130/hr",
      location: "San Francisco, CA"
    },
    {
      brandLogo: "https://img.icons8.com/?size=96&id=eLp0UzmXETI1&format=png",
      companyName: "NVIDIA",
      datePosted: "8 weeks ago",
      post: "GPU Systems Engineer",
      tag1: "Full-Time",
      tag2: "Mid-Level",
      pay: "$88/hr",
      location: "Austin, TX"
    },
    {
      brandLogo: "https://img.icons8.com/?size=100&id=118571&format=png",
      companyName: "Adobe",
      datePosted: "12 days ago",
      post: "UI/UX Engineer",
      tag1: "Contract",
      tag2: "Senior-Level",
      pay: "$76/hr",
      location: "Mumbai, India"
    },
    {
      brandLogo: "https://img.icons8.com/?size=160&id=rf1wUVbBvzaa&format=png",
      companyName: "Tesla",
      datePosted: "9 days ago",
      post: "Embedded Software Engineer",
      tag1: "Full-Time",
      tag2: "Mid-Level",
      pay: "$92/hr",
      location: "Palo Alto, CA"
    }
  ];

  return (

    <div className='parent'>
      {jobOpenings.map(function (elem, idx) {
        return <div key={idx}><Card brandLogo={elem.brandLogo} company={elem.companyName} datePosted={elem.datePosted} post={elem.post} tag1={elem.tag1} tag2={elem.tag2} pay={elem.pay} />
        </div>
      })}
    </div>
  )
}

export default App;
