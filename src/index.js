import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Count from './Components/count';
import reportWebVitals from './reportWebVitals';
import ShowFormInputFunc from './FuncComponent/1)ShowFormInputFunc';
import DeleteItemFunc from './FuncComponent/4)DeleteItemFunc';
import DeleteItem from './Day5/4)DeleteItem';
import QuestionAnswerFunc from './FuncComponent/2)QuestionAnswerFunc';
import FormFunc from './FuncComponent/3)FormFunc';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Count/> */}
    {/* <ShowFormInputFunc/> */}
    <DeleteItemFunc/>
    {/* <DeleteItem/> */}
     {/* <QuestionAnswerFunc/> */}
   
    {/* <FormFunc/> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
