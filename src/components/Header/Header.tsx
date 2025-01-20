import { FunctionComponent } from 'react';
import { HeaderProps } from './Header.types';

const Header: FunctionComponent<HeaderProps> = ({ title, navItems }) => {
  return (
    <header id="header">
      <div className="logo">
        <span className="icon fa-diamond" />
      </div>
      <div className="content">
        <div className="inner">
          <h1>{title}</h1>
          {/* eslint-disable-next-line react/no-danger */}
          <div>
            <p>
              /fɪˈnɛstrə/
              <br />
              Window in Latin <br /> <br /> Welcome! <br /> <br />
              Window into where I doodle, color and build engines with legos and sometimes crayons
            </p>
          </div>
        </div>
      </div>
      <nav>
        <ul>
          {navItems.map(({ title: navTitle }) => (
            <li key={navTitle}>
              <a href={`#${navTitle}`}>{navTitle}</a>
            </li>
          ))}
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
