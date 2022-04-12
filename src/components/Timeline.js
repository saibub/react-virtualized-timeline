import './Timeline.css'
import Card from './Card';

const Timeline = (props) => {

    return (

        <div>
            <Card page={props.page} loading={props.loading} offset={0} />
            <Card page={props.page} loading={props.loading} offset={1} />
            <Card page={props.page} loading={props.loading} offset={2} />
            <Card page={props.page} loading={props.loading} offset={3} />
            <Card page={props.page} loading={props.loading} offset={4} />
            <Card page={props.page} loading={props.loading} offset={5} />
            <Card page={props.page} loading={props.loading} offset={6} />
            <Card page={props.page} loading={props.loading} offset={7} />
            <Card page={props.page} loading={props.loading} offset={8} />
        </div>
    )

}


export default Timeline;
