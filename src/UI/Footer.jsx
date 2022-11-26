import React, { useState } from 'react'
import Link from './Link/Link'
import LinkList from './LinkList'
import telegram from '../img/telegram.png'
import phone from '../img/phone.png'
import whatsapp from '../img/whatsapp.png'
import Container from './Container/Container'

export default function Footer() {
	const [about, setAbout] = useState([
		{href: '#', content: 'Партнёрская программа'},
		{href: '#', content: 'Вакансии'},
	])

	const [menu, setMenu] = useState([
		{href: '#', content: 'Расчёт стоимости'},
		{href: '#', content: 'Услуги'},
		{href: '#', content: 'Виджеты'},
		{href: '#', content: 'Интеграции'},
		{href: '#', content: 'Наши клиенты'},
		{href: '#', content: 'Кейсы'},
		{href: '#', content: 'Благодарственные письма'},
		{href: '#', content: 'Сертификаты'},
		{href: '#', content: 'Блог на Youtube'},
		{href: '#', content: 'Вопрос / Ответ'},
	])

	const [contacts, setContacts] = useState([
		{href: 'tel:75555555555', content: '+7 555 555-55-55'},
		
	])

	const [socialMedia, setSocialMedia] = useState([
		{href: '#', content: <img src={telegram}/>},
		{href: '#', content: <img src={phone}/>},
		{href: '#', content: <img src={whatsapp}/>},
	])

	return (
		<footer className='footer'>
			<Container>
				<div className='footer__block'>
					<h3 className='footer__blockHeading'>О КОМПАНИИ</h3>
					<LinkList links={about} linkListClass='footer__about'/>
				</div>
				<div className='footer__block'>
					<h3 className='footer__blockHeading'>МЕНЮ</h3>
					<LinkList links={menu} linkListClass='footer__menu'/>
				</div>
				<div className='footer__block'>
					<h3 className='footer__blockHeading'>КОНТАКТЫ</h3>
					<LinkList links={contacts} linkListClass='footer__contacts'>
						<LinkList links={socialMedia} linkListClass='footer__socialMedia'/>
						<address className='footer__address'>Москва, Путевой проезд 3с1, к 902</address>			
					</LinkList>
				</div>
				<div className='disclaimer'>
					<span>©WELBEX 2022. Все права защищены.</span>
					<Link link={{href: '#'}} linkClass='confidentialPolicy-link'>Политика конфиденицальности</Link>
				</div>
			</Container>
		</footer>

	)
}
