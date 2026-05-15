const Header = (course) => {
  return (
    <h1>{course.course}</h1>
  )
}

const Part = (content) => {
  return (
    <p>{content.part.name}: {content.part.exercises}</p>
  )
}


const Content = ({part1, part2, part3}) => {
  return (
    <div>
      <Part part={part1} />
      <Part part={part2} />
      <Part part={part3} />

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
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  return (
    <div>
      <Header course={course} />
      <Content 
        part1={part1}
        part2={part2}
        part3={part3}
      />
      <Total num1={part1.exercises} num2={part2.exercises} num3={part3.exercises} />
    </div>
  )
}


export default App