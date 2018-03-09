export const hasStatefulSetup = (setup: SetupT, pure: boolean) => {
	return [
		'lifecycle' in setup,
		'methods' in setup,
		'state' in setup,
		pure
	].includes(true)
}