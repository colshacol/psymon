export const functional = (name, component) => {
	const c = component({});
	c.displayName = name;
	return c;
}