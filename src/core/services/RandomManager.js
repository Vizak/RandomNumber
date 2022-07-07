const RandomManager = {
	getRandom: ({ config }) => {
		const { minimum, maximum } = config;

		return Math.floor((Math.random() * (maximum - minimum + 1)) + minimum);
	},
};

export default RandomManager;
