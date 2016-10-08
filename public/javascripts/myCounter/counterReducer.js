export default function(state={number: 0}, action){
	const count = state.number;
	switch(action.type){
		case 'add':
			return {number: count + 1};
		case 'fell':
			return {number: count - 1};
		default:
			return state;
	}
}