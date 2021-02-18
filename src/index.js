import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let postsData = [
  { id: 1, massage: 'Hi, how are you?', likesCount: 12 },
  { id: 2, massage: 'It my first post!', likesCount: 16 },
  { id: 3, massage: 'Prikol nahuj', likesCount: 99 },
  { id: 4, massage: 'Bla-bla', likesCount: 0 }
];

let dialogsData = [
  { id: 1, name: 'Женька' },
  { id: 2, name: 'Андрей' },
  { id: 3, name: 'Антоша' },
  { id: 4, name: 'Серега' }
];

let messagesData = [
  { id: 1, _text: 'Привет' },
  { id: 2, _text: 'Как дела?' },
  { id: 3, _text: 'Чё делаешь?' }
];

ReactDOM.render(
  <React.StrictMode>
    <App postsData={postsData} dialogsData={dialogsData} messagesData={messagesData} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
