import React, {useRef } from "react";
import DnR from './DnR';
import {AboutMeTheme} from './themes';

import {Label} from './Label'

const paneStyle = {
	top: '25%',
	left: '10%',
	width: 0,
	height: 0
};

export default class AboutMeWindow extends React.Component {
  constructor(props) {
    super(props);
		this.AboutMe = AboutMeTheme({
			onClose: ()=>this.refs.aboutme.minimize(),
			onMinimize: ()=>this.refs.aboutme.minimize(),
			onMaximize: ()=>this.refs.aboutme.maximize(),
		});
	}


	render() {
		return (
			<React.Fragment>


				<Label WhenDoubleClicked={()=>this.refs.aboutme.restore()} img='https://image.flaticon.com/icons/svg/2306/2306060.svg' text='Обо мне.txt'
				dragParam={{
					id: 'Icon4',
					x: 100,
					y: 100,
				}}/>

				<DnR
					ref='aboutme'
					{...this.AboutMe}
					cursorRemap={(c) => c === 'move' ? 'default' : null}
					style={paneStyle}
					boundary={{
						top: 0,
						left: 0,
					}}>
						<img className="myPhoto" src={process.env.PUBLIC_URL + '/myPhoto3.jpg'} alt=""/>
						<p>Привет, недавно я начал интересоваться фронтенд разработкой и уже успел приобрести некоторые знания:</p>
						<ul>
							<li>Js (Максимально изучаю особенности языка)</li>
							<li>React js & Redux(Базовый)</li>
							<li>Vue js & Vuex (Ознакомлен и могу быстро переключиться)</li>
							<li>Sass</li>
						</ul>
						<p>Помимо этого я владею некоторыми другими навыками</p>
						<ul>
							<li>Backend: php, laravel & vue js (Изучал ранее, т.к хотел стать backend разработчиком, но потом резко передумал)</li>
							<li>Английский (Разговорный, легко могу читать документацию, книги, смотреть видео)</li>
						</ul>
						<strong>Моя позиция это здоровый образ жизни и регулярные занятия спортом. На досуге читаю книги и смотрю фильмы</strong>
						<ul>
							<li><a href="https://github.com/ptimer?tab=repositories" target="_blank">Github</a></li>
							<li><a href="https://t.me/Ilya_bilous_he" target="_blank">Telegram</a></li>
							<li><a href="mailto:kriminalmykriminal@gmail.com" target="_blank">kriminalmykriminal@gmail.com</a></li>
						</ul>
				</DnR>
		  </React.Fragment>
		);
	}
}

