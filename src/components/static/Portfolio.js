import React from 'react'

export default function Portfolio(){
		return (
        <React.Fragment>
            <h4>Мои проекты</h4>
            <div className="flip">
                <div className="front" 
                style={{backgroundImage: 'url(kanban.png)'}}>
                   <h1 class="text-shadow">19.05.20</h1>
                </div>
                <div class="back">
                   <h2>Kanban проект</h2>
                   <p><br/>
                   ReactJs & Redux. Присутствует drag and drop. Тренировался на нем использовать redux. В процессе и еще нужно много чего добавить и исправить. <br/>
                    <a href="https://github.com/ptimer/kanbanProject" target="_blank">Github </a>
                    <a href="https://portfolio-bilous.000webhostapp.com/" target="_blank">Посмотреть</a>
                   </p>
                </div>
            </div>
			<div className="flip">
                <div className="front" 
                style={{backgroundImage: 'url(https://github.com/ptimer/ptimer.github.io/blob/master/rock-paper-scissors-master/design/desktop-preview.jpg?raw=true'}}>
                   <h1 class="text-shadow">09.05.20</h1>
                </div>
                <div class="back">
                   <h2>Камень, ножницы, бумага</h2>
                   <p>Задание взято с сайта <a href="https://frontendmentor.io" target="_blank">FrontendMentor.io</a><br/>
                   Практиковал react JS, изучал анимации<br/>
                    <a href="https://github.com/ptimer/ptimer.github.io/tree/master/rock-paper-scissors-master" target="_blank">Github </a>
                    <a href="https://ptimer.github.io/rock-paper-scissors-master/" target="_blank">Посмотреть</a>
                   </p>
                </div>
            </div>
            <div class="flip">
            <div class="front" style={{backgroundImage: 'url(https://github.com/ptimer/ptimer.github.io/raw/master/social-media-dashboard-with-theme-switcher-master/design/desktop-preview.jpg'}}>
                <h1 class="text-shadow">07.05.20</h1>
            </div>
            <div class="back">
               <h2>Дашбоард с переключателем</h2>
                   <p>Задание взято с сайта <a href="https://frontendmentor.io" target="_blank">FrontendMentor.io</a><br/>
                   Создан без библиотек, осваивал DOM <br/>
                    <a href="https://github.com/ptimer/ptimer.github.io/tree/master/social-media-dashboard-with-theme-switcher-master" target="_blank">Github </a>
                    <a href="https://ptimer.github.io/social-media-dashboard-with-theme-switcher-master/" target="_blank">Посмотреть</a>
                </p>
            </div>
            </div>
            <div class="flip">
            <div class="front" style={{backgroundImage: 'url(https://github.com/ptimer/ptimer.github.io/raw/master/base-apparel-coming-soon-master/design/desktop-preview.jpg'}}>
                <h1 class="text-shadow">21.04.20</h1>
            </div>
            <div class="back">
               <h2>Первая попытка верстки :)</h2>
                   <p>Задание взято с сайта <a href="https://frontendmentor.io" target="_blank">FrontendMentor.io</a><br/>
                   Осваивал медиа запросы <br/>
                    <a href="https://github.com/ptimer/ptimer.github.io/tree/master/base-apparel-coming-soon-master" target="_blank">Github </a>
                    <a href="https://ptimer.github.io/base-apparel-coming-soon-master/" target="_blank">Посмотреть</a>
                </p>
            </div>
            </div>
       </React.Fragment>
		);
}
