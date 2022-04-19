import './Timeline.css'
import Card from './Card';

const generateKey = (pre) => {
    return `${ pre }_${ new Date().getTime() }`;
}

const Timeline = (props) => {

    var cards=[]
    for (let index = 0; index < 6; index++) {
        cards.push(<Card windowStartingIndex={props.windowStartingIndex} loading={props.loading} offset={index} key={generateKey(props.windowStartingIndex+index)}/>);
        
    }
return (
        <div>
            {cards}
        </div>        
    )
}

export default Timeline;
