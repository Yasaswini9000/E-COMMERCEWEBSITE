import React from 'react';

function Header() {
  return (
    <header>
      <input type="text" placeholder="Search products" />
      <div className="icons">
        <i className="profile-icon">Profile</i>
        <i className="cart-icon">Cart</i>
      </div>
    </header>
  );
}

export default Header;
