import './App.css';
import Header from './UI/Header';
import Container from './UI/Container/Container'
import Section from './UI/Section';
import { useEffect, useState } from 'react';
import MyButton from './UI/Button/MyButton';
import Footer from './UI/Footer';

function App() {
  const [offers, setOffer] = useState([
    {head: 'ВИДЖЕТЫ', body: '30 готовых решений'},
    {head: 'DASHBOARD', body: 'с показателями вашего бизнеса'},
    {head: 'SKYPE АУДИТ', body: 'отдела продаж и\u00A0CRM системы'},
    {head: '35 ДНЕЙ', body: `использования CRM`},
  ])
  const [offersAlt, setOfferAlt] = useState([
    {head: 'SKYPE АУДИТ'},
    {head: '30 ВИДЖЕТОВ'},
    {head: 'DASHBOARD'},
    {head: 'МЕСЯЦ AMOCRM'}
  ])


  return (
    <div className="App">
      <span className='purple-ball'></span>
      <span className='red-ball'></span>
      <span className='red-ball-banner'></span>
      <Header />
      <Section
        sectionClass='banner'
      >
        <Container>
          <div className='banner__block'>
            <h1 className='banner__heading'>Зарабатывайте больше <span>с{'\u00A0'}WELBEX</span></h1>
            <p className='banner__claim'>Развиваем и контролируем продажи за вас</p>
          </div>
          <div className='banner__block'>
            <h2 className='banner__offer-heading'>
            Вместе с <span>БЕСПЛАТНОЙ КОНСУЛЬТАЦИЕЙ</span><span>бесплатной консультацией</span> мы дарим:
            </h2>
            <ul className='banner__offers'>
              {
                offers.map(item => 
                  <li className='offer' key={item.head}>
                    <h3 className='offer__heading'>{item.head}</h3>
                    <p className='offer__description'>{item.body}</p>
                  </li>
                )
              }
              {
                offersAlt.map(item => 
                  <li className='offerAlt' key={item.head}>
                    <span></span>
                    <h3 className='offer__heading'>{item.head}</h3>
                  </li>
                )
              }
            </ul>
            <MyButton buttonClass='banner__button'>Получить консультацию</MyButton>
          </div>
        </Container>
      </Section>
      <Footer />
    </div>
  );
}

export default App;
