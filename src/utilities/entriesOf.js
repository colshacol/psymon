export const entriesOf = (objects: {}[]) => {
	return objects.reduce((final, object = {}) => {
		Object.entries(object).forEach((entry) => {
			final.push(entry);
		});

		return final;
	}, []);
};
