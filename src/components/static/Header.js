import React from "react";

export default class Header extends React.Component{
		constructor(props) {
		    super(props);
		    this.state = {date: new Date()};
		  }

		  componentDidMount() {
		    this.timerID = setInterval(
		      () => this.tick(),
		      1000
		    );
		  }

		  componentWillUnmount() {
		    clearInterval(this.timerID);
		  }

		  tick() {
		    this.setState({
		      date: new Date()
		    });
		  }

		  render() {
			const months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];
			const days = ["Вс", "Пн", "вт", "Ср", "Чт", "Пт", "Сб"];

		    return (
		      <header>
		        <div className="right"><span>Приложения</span></div>
		        <div className="center">
		        
		        		{`${days[this.state.date.getDay()]},${months[this.state.date.getMonth()]} ${this.state.date.getDate()}  ${this.state.date.getHours()}:${this.state.date.getMinutes()}:${this.state.date.getSeconds()} ` }

		        </div>
		        <div className="header__options left">
		        	<ul className="header__list">
			        	<li>
			        		<img className="header__icon" src="https://image.flaticon.com/icons/svg/2983/2983809.svg" alt=""/>
			        	</li>
			        	<li>
			        		<img className="header__icon" src="https://image.flaticon.com/icons/svg/2097/2097743.svg" alt=""/>
			        	</li>
			        	<li>
			        		<img className="header__icon" src="https://image.flaticon.com/icons/svg/3011/3011297.svg" alt=""/>
			        	</li>
		        	</ul>
		        </div>
		        
		      </header>
		    );
		  }
}
