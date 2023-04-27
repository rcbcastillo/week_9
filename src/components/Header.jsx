
const Header = () => {
  return (
    <header>This is my header!
    <nav>    
      <a  
        className ='navbar-expand-sm'
        href='www.qa.com' 
        target= '_blank' 
        rel="noopener noreferrer">
        <img src="https://i.imgur.com/smguoM3.png" alt='cat' width={100}/>
      </a>
      <a className ='nav-brand'
        href='/'> Todo App
    
      </a>
    </nav>
    </header>
    )
};


export default Header;
