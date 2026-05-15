const Header = (course) => {
  return (
    <h1>{course.course}</h1>
  )
}

const Content = (content) => {
  return (
    <p>{content.name}: {content.exercise}</p>
  )
}

const Total = (number) => {
  return(
  <p>Number of excersies {number.num1 + number.num2 + number.num3} </p>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header course={course} />
      <Content name={part1} exercise={exercises1} />
      <Content name={part2} exercise={exercises2} />
      <Content name={part3} exercise={exercises3} /> 
      <Total num1={exercises1} num2={exercises2} num3={exercises3} />
    </div>
  )
}


export default App