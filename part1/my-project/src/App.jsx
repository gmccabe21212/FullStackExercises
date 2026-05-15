const Header = (course) => {
  return (
    <h1>{course.course}</h1>
  )
}

const Part = (content) => {
  return (
    <p>{content.name}: {content.exercise}</p>
  )
}


const Content = (prop) => {
  return (
    <div>
      <Part name={prop.part1} exercise={prop.exercises1} />
      <Part name={prop.part2} exercise={prop.exercises2} />
      <Part name={prop.part3} exercise={prop.exercises3} />

    </div>
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
      <Content 
        part1={part1} exercises1={exercises1}
        part2={part2} exercises2={exercises2}
        part3={part3} exercises3={exercises3}
      />
      <Total num1={exercises1} num2={exercises2} num3={exercises3} />
    </div>
  )
}


export default App