import Nav from './Nav'

const Layout = (props) => (
  <div className="app">
    <Nav />
    {props.children}
  </div>
)

export default Layout;

