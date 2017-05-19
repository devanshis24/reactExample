import React from 'react';
import Header from './Header';
import BooksPreview from './BooksPreview';
class App extends React.Component {
	state = {
		pageHeader : 'My Portfolio'
	}
	render() {
		return (
			<div claasName="App">
				<Header message={this.state.pageHeader}/>
				<div> 
				{this.props.book.map(book =>
					<BooksPreview {...book} />

				)}
				
				</div>
			</div>
		);	
	}
	
};
export default App;