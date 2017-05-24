import React, {Component, PropTypes} from 'react';

export default class Dashboard extends Component {
	render() {
		let succ = [];
		if (this.props.data.Succ != null) {
			for (let i = 0; i < this.props.data.Succ.length; ++i) {
				succ.push(<div key={i}><pre>{i + 1}:{JSON.stringify(this.props.data.Succ[i], null, 2)}</pre></div>)
			}
		}
		
		let net = [];
		if (this.props.data.Net != null) {
			for (let i = 0; i < this.props.data.Net.length; ++i) {
				succ.push(<div key={i}><pre>{i + 1}:{JSON.stringify(this.props.data.Net[i], null, 2)}</pre></div>)
			}
		}
		

		let bad = [];
		if (this.props.data.Bad != null) {
			for (let i = 0; i < this.props.data.Bad.length; ++i) {
				succ.push(<div key={i}><pre>{i + 1}:{JSON.stringify(this.props.data.Bad[i], null, 2)}</pre></div>)
			}
		}
		
		return(
			<div>
				<h1> WELCOME TO THE SPOTTER DASHBOARD! </h1>
				<h2>Successful</h2>
				{succ}
				<h2>Network Failed</h2>
				{net}
				<h2>Bad Failed</h2>
				{bad}
			</div>
		);
	}
}

Dashboard.propTypes = {
	data: PropTypes.object
};
