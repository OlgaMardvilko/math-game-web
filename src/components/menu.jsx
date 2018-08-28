import React, {Component} from 'react';
import {Link} from 'react-router-dom';
class Menu extends Component {
  render() {
    return (
      <div className="game-wrapper">
        <div className="menu-screen">
          <ul>
            <li>
              <Link to="/players">Играть</Link>
            </li>
            <li>
              <Link to="/settings">Настройки</Link>
            </li>
            <li>
              <Link to="/register">Регистрация</Link>
            </li>
            <li>
              <Link to="/score">Полка</Link>
            </li>
            <li>
              <Link to="/loading">Загрузка</Link>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Menu;
