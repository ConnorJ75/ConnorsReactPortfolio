import {Link} from "react-router-dom";

export default function Nav() {
  const linkStyle = { border: '1px white', padding: '5px' };

  return (
    <nav className="main-header-menu">
      <section
        style={{
          display: 'flex',
          fontFamily: 'helvetica',
          flexDirection: 'row',
          alignItems: 'flex-start',
          justifyContent: 'flex-start',
        }}
      >
        <div style={linkStyle}>
          {/* <a href="">About Me</a> */}
          <Link to = {"./pages/AboutMe"}>About Me</Link>
        </div>
        <div style={linkStyle}>
          <a href="#">Portfolio</a>
        </div>
        <div style={linkStyle}>
          <a href="#">Contact</a>
          <Link to = {"./pages/Contact"}>About Me</Link>
        </div>
        <div style={linkStyle}>
          <a href="#">Resume</a>
        </div>
      </section>
    </nav>
  );
}
