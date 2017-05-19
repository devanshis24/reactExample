import React from 'react';

const BooksPreview = (book) => (
	<div className ="BooksPreview">
		<div>
			{book.title}
		</div>
		<div>
			{book.price}
		</div>
	</div>
);

export default BooksPreview;
