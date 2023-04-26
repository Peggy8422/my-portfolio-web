import cardStyles from './Cards.module.scss';
import { CardDecoTwo } from '../assets/images';

//卡片1
export function CardOne({title}) {
  return (
    <div className={cardStyles.cardBox_1}>
      <img className={cardStyles.webCategory} src="https://picsum.photos/id/234/1000/500" alt=""/>
      <h4 className={cardStyles.cardTitle}>{title}</h4>
    </div>
  );
}

//卡片2
export function CardTwo({title}) {
  return (
    <>
      <div className={cardStyles.card_deco_illus}>
       <CardDecoTwo />
      </div>
      <div className={cardStyles.cardBox_2}>
        <img className={cardStyles.webWork} src="https://picsum.photos/id/236/1000/500" alt=""/>
        <h6 className={cardStyles.cardTitle_2}>{title}</h6>
      </div>
    </>
  );
}

//卡片3
