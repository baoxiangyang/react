import React from 'react';
import ReactDOM from 'react-dom';
require('../../static/css/weui.min.css');
/*require('../../static/js/zepto.min.js');
require('../../static/js/weui.min.js');*/
class Weui extends React.Component {
  render() {
  	
  	return (
	  	<div>
	  		你是我的小苹果
	  	</div>
	  	)
	}
}
ReactDOM.render(<Weui />, 
	document.getElementById('main')
);