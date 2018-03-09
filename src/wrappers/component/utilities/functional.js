export const functional = (name, component) => {
	component.displayName = name;
	return component;
}