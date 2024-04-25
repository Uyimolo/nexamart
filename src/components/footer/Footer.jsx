import { Link } from 'react-router-dom';
import Logo from '../logo/Logo'
import style from './footer.module.css'
function Footer() {
  return (
    <footer className={style.footer}>
      <div className={style.footer_top}>
        <div className={style.footer_content}>
          <Logo />
        </div>

        <div className={style.footer_content}>
          <h3>Support</h3>

          <p>123 Fake Street, Lagos, Nigeria</p>
          <p>shop@nexamart.store</p>
          <p>+234 800 123 4567</p>
        </div>

        <div className={style.footer_content}>
          <h3>My NexaMart</h3>

          <Link to='/cart'>Cart</Link>
          <Link to='/wishlist'>Wishlist</Link>
          <Link to='/products'>Shop</Link>
        </div>

        <div className={style.footer_content}>
          <h3>Quick links</h3>

          <p>Privacy Policy</p> 
          <p>Terms Of Use</p>
          <p>FAQ</p>
          <p>Contact Us</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer
