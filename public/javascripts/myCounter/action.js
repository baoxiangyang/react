export function add (num){
	return {
		type:'add',
		num
	}
};
export function fell(num){
	return {
		type: 'fell',
		num
	}
};
export function test(a){
	return function(dispatch,getState){
		console.log(getState());
		dispatch({
			type:'test',
			num: 100
		});
		setTimeout(function(){
			dispatch({
				type:'test',
				num: a
			});
		},2000);
		return 'aaa';
	};
	
}