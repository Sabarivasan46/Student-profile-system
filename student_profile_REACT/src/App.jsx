import './App.css'

function Header() {
  return (
    <header className="header">
      <h1>Student Management System</h1>
    </header>
  )
}

function StudentProfile({ name, department, year }) {
  return (
    <div className="student-profile">
      <h2>{name}</h2>
      <p><strong>Department:</strong> {department}</p>
      <p><strong>Year:</strong> {year}</p>
    </div>
  )
}

function Footer() {
  return (
    <footer className="footer">
      <p>© 2026 Student Management System</p>
    </footer>
  )
}

function App() {

  const student1 = {
    name: "Anu",
    department: "CSE",
    year: "3rd Year"
  }

  const student2 = {
    name: "Bala",
    department: "Computer Science",
    year: "3rd Year"
  }

  return (
    <div>
      <Header />

      <main className="container">

        <h3>Student 1</h3>

        <StudentProfile
          name={student1.name}
          department={student1.department}
          year={student1.year}
        />

        <h3>Student 2</h3>

        <StudentProfile
          name={student2.name}
          department={student2.department}
          year={student2.year}
        />

      </main>

      <Footer />
    </div>
  )
}

export default App