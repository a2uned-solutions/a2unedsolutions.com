import React from 'react';

export default function Footer(props) {
  return (
    <footer>
      <ul className="connect no-list">
        <li>
          <a href="https://t.me/a2uned" target="_blank" rel="noopener noreferrer" title="Telegram">
            <i className="fa fa-telegram" aria-hidden="true"></i>
            <span className="connect-info">
                            <strong>Telegram </strong>/
                            a2uned
                        </span>
          </a>
        </li>
        <li>
          <a href="https://twitter.com/a2uned" target="_blank" rel="noopener noreferrer" title="Twitter">
            <i className="fa fa-twitter-square" aria-hidden="true"></i>
            <span className="connect-info">
                            <strong>Twitter </strong>/
                            @a2uned
                        </span>
          </a>
        </li>
        <li>
          <a href="https://github.com/a2uned-solutions" target="_blank" rel="noopener noreferrer" title="GitHub">
            <i className="fa fa-github" aria-hidden="true"></i>
            <span className="connect-info">
                            <strong>GitHub </strong>/
                            a2uned-solutions
                        </span>
          </a>
        </li>
        {/*<li>*/}
        {/*<a href="" target="_blank">*/}
        {/*<i className="fa fa-linkedin-square" target="_blank" rel="noopener noreferrer"  aria-hidden="true"></i>*/}
        {/*</a>*/}
        {/*</li>*/}
      </ul>
    </footer>
  );
}