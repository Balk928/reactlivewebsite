import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './App.css';
import Sdata from './Sdata';

ReactDOM.render(
   <>
   <h3 className="heading_Style">List Of Top 5 Netflix Series</h3>
   <App
    imgsrc ={Sdata[0].imgsrc}
    title = {Sdata[0].title}
    sname = {Sdata[0].sname}
    link = {Sdata[0].link}
    />

<App
    imgsrc = {Sdata[1].imgsrc}
    title = {Sdata[1].title}
    sname = {Sdata[1].sname}
    link = {Sdata[1].link}
    />

<App
    imgsrc = {Sdata[2].imgsrc}
    title = {Sdata[2].title}
    sname = {Sdata[2].sname}
    link = {Sdata[2].link}
    />

<App
    imgsrc = {Sdata[3].imgsrc}
    title = {Sdata[3].title}
    sname = {Sdata[3].sname}
    link = {Sdata[3].link}
    />

<App
    imgsrc = {Sdata[4].imgsrc}
    title = {Sdata[4].title}
    sname = {Sdata[4].sname}
    link = {Sdata[4].link}
    />
 </>,
   document.getElementById('root'));
