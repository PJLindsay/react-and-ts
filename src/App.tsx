import Header from './components/Header'
import goalsImg from './assets/goals.jpg'
import CourseGoals from './components/CourseGoals.tsx'

function App() {
  return (
    <main>
      <Header image={{ src: goalsImg, alt: 'A list of goals' }}>
        <h1>Your Course goals</h1>
      </Header>

      <CourseGoals
        goals={[
          {
            id: 1,
            title: 'Learn TS',
            description: 'Learn TS from the ground up',
          },
          {
            id: 2,
            title: 'Practice TS',
            description: 'Practice working with TypeScript!',
          },
        ]}
      />
    </main>
  )
}

export default App
