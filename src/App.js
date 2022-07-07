import { React } from 'react';
import './App.scss';
import Button from './components/Button';
import context from './core/context';

const App = ({ state: { count }}) =>
	<div className="App" role="App">
		<div>{Button(context)}</div>
		<div>Count: { count }</div>
	</div>;

export default App;
