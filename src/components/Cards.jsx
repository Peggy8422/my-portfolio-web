import cardStyles from './Cards.module.scss';

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

//卡片3