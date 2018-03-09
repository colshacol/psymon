declare type ObjectOfAnyT = {
	[name: string]: any
};

declare type ObjectOfFunctionsT = {
	[name: string]: Function
};

declare type SetupT = {
	state: ObjectOfAnyT,
	methods: ObjectOfFunctionsT,
	lifecycle: ObjectOfFunctionsT,
	component: React.ComponentType
};