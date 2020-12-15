import React from 'react';
import '../../css/form.css';

const Thanks = () => {
	const Thanks = {
		fontSize: "50px",
		textTransform: "uppercase",
	}

    return (
    	<div class="container">
			<h2 class="message" style={Thanks}>Спасибо!<br />Скоро мы с вами свяжемся</h2>
      	</div>
    )
}

export default Thanks;