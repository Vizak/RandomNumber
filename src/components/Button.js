import { React } from 'react';

const Button = (context) =>
	<button
		onClick={ () => context.actions.setRandom() }
	>
		GetRandom!
	</button>;

export default Button;
