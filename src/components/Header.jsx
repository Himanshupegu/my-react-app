//! Introduction to React Components
// React is all about reusing components a component is a small section of code that can include JavaScript and HTML your function will return that code and make it reusable


function Header() {
  return (
    <header>
      <h1>My Website</h1>
      <nav>
        <ul>
          <li>
            <a href="#"></a>Home
          </li>
          <li>
            <a href="#"></a>About
          </li>
          <li>
            <a href="#"></a>Services
          </li>
          <li>
            <a href="#"></a>Contact
          </li>
        </ul>
      </nav>
      <hr />
    </header>
  )
}

export default Header
