import '../App.css';

function Nav() {
    return (
      <nav>
          <ul class = "nav_logo">
             <li>my logo</li>
          </ul>
          <ul class = "nav_menu">
              <li><a href = "#">HTML</a></li>
              <li><a href = "#">CSS</a></li>
              <li><a href = "#">JavaScript</a></li>
              <li><a href = "#">React</a></li>
          </ul>
          <ul class = "nav_icon">
              <li><a target = "_blank" href= "https://www.facebook.com"><i class="fa-brands fa-facebook"></i></a></li>
              <li><a target = "_blank"href = "https://www.instagram.com"><i class="fa-brands fa-square-instagram"></i></a></li>
          </ul>
      </nav>
    )
  }

export default Nav;