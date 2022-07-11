import { Link } from 'react-router-dom';
import Logo from '../../Particles/Logo/Logo';
import Cart from '../Cart/Cart';
import './Header.css';
import '../../../default.css';

function Header({ cart, handleClick, onRemove }) {
  return (
    <header className='header'>
      <div className='menu-container'>
        <div className='main-logo'>
          <Link to='/'>
            <Logo />
          </Link>
        </div>
        <nav className='main-menu'>
          <Link to='/'>Home</Link>
          <Link to='/products'>Products</Link>
        </nav>
        <div className='login-wrapper'>
          <nav className='login-menu'>
            <Link to='/signin'>Signin</Link>
            <Link to='/register'>Register</Link>
          </nav>
          <Cart handleClick={handleClick} cart={cart} onRemove={onRemove} />
        </div>
      </div>
    </header>
  );
}

export default Header;
