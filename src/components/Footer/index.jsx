import React from 'react';
import logo from '../../assets/img/logo.svg';
import './footer.css';

const Footer = () => {
  return (
    <div className="gwiz-footer">
      <p className="gf-content">
        gwiz.v1 &middot;
        <a href="google.com">about</a>&middot;
        <a href="google.com">report issue</a>&middot;
        <a href="google.com">give feedback</a>
      </p>
    </div>
  );
};

export default Footer;