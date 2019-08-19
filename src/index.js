import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Card from './Card';
import tachyons from 'tachyons';
import { robots } from './robots';

import * as serviceWorker from './serviceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));
const renderedRobots = robots.map(robot => {
  return (<Card
    id={robot.id}
    first={robot.first}
    last={robot.last}
    username={robot.username}
    color={robot.color}
  />
  )
})

ReactDOM.render(
  <div>
    <h1 className="tc">Robo Friends</h1>
    {renderedRobots}
  </div>


  , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
