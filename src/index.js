import React from 'react';
import ReactDom from 'react-dom';
import App from './components/App';
import data from './testData';
console.log(data.books[0].title);
ReactDom.render(

	<App book = {data.books}/>,
	document.getElementById('root')
	);