import React from 'react';

export default function Header(props) {
  return (
    <header className="header">
      <img src={props.logo} className="logo" alt="A2uned Solutions" />
    </header>
  );
}