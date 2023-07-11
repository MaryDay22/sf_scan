import idea from '../ui/idea.png'
import hawkeye from '../ui/hawkeye.png'
import laptop from '../ui/laptop.png'
import css from '../main.module.css'
export const pricing = [
    {
        tariff: 'Beginer',
        price: '799 ₽',
        credit: 'или 150 ₽/мес. при рассрочке на 24 мес.',
        image: idea,
        current:true,
        className:css.first_card,
        id:1
    },
    {
        tariff: 'Pro',
        price: '1 299 ₽',
        credit: 'или 279 ₽/мес. при рассрочке на 24 мес.',
        image: hawkeye,
        className:css.second_card,
        id:2
    },
    {
        tariff: 'Business',
        price: '2 379 ₽',
        credit: '_',
        image: laptop,
        className:css.third_card,
        id:3
    },
  ];
