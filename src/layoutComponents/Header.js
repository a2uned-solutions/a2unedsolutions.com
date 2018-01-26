import React from 'react';
import logo from '../images/a2uned_solutions_logo.svg';

export default function Header() {
  return (
    <header className="header">
      <img src={logo} className="logo" alt="A2uned Solutions" />
      <a href="https://blog.a2unedsolutions.com" className="blog-link">Blog</a>
    </header>
  );
}