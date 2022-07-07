import RandomManager from './services/RandomManager';

const setRandom = (context) => ({
	count: RandomManager.getRandom(context),
});

const actions = {
	setRandom,
};

export default actions;
