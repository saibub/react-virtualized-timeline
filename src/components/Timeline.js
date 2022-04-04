import './Timeline.css'
import Data from '../data.json';

const Timeline = (props) => {

    return (

        <div>
            <div className={Data[props.page].id % 2 === 0 ? 'container right' : 'container left'} key={Data[props.page].id} >
                <div className="content">
                    <div className='heading'><h2>{Data[props.page].title}</h2>
                        <span className='img right'><img src={Data[props.page].image} alt="logo" /></span>
                    </div>
                    <p>{Data[props.page].content}</p>

                </div>
            </div>
            {props.loading ? <div className="text-center">loading data ...</div> : ""}
            {props.noData ? <div className="text-center">no data anymore ...</div> : ""}

            <div className={Data[props.page + 1].id % 2 === 0 ? 'container right' : 'container left'} key={Data[props.page + 1].id}>
                <div className="content">
                    <div className='heading'><h2>{Data[props.page + 1].title}</h2>
                        <span className='img right'><img src={Data[props.page + 1].image} alt="logo" /></span>
                    </div>
                    <p>{Data[props.page + 1].content}</p>

                </div>
            </div>
            {props.loading ? <div className="text-center">loading data ...</div> : ""}
            {props.noData ? <div className="text-center">no data anymore ...</div> : ""}

            <div className={Data[props.page + 2].id % 2 === 0 ? 'container right' : 'container left'} key={Data[props.page + 2].id}>
                <div className="content">
                    <div className='heading'><h2>{Data[props.page + 2].title}</h2>
                        <span className='img right'><img src={Data[props.page + 2].image} alt="logo" /></span>
                    </div>
                    <p>{Data[props.page + 2].content}</p>

                </div>
            </div>
            {props.loading ? <div className="text-center">loading data ...</div> : ""}
            {props.noData ? <div className="text-center">no data anymore ...</div> : ""}

            <div className={Data[props.page + 3].id % 2 === 0 ? 'container right' : 'container left'} key={Data[props.page + 3].id}>
                <div className="content">
                    <div className='heading'><h2>{Data[props.page + 3].title}</h2>
                        <span className='img right'><img src={Data[props.page + 3].image} alt="logo" /></span>
                    </div>
                    <p>{Data[props.page + 3].content}</p>

                </div>
            </div>
            {props.loading ? <div className="text-center">loading data ...</div> : ""}
            {props.noData ? <div className="text-center">no data anymore ...</div> : ""}

            <div className={Data[props.page + 4].id % 2 === 0 ? 'container right' : 'container left'} key={Data[props.page + 4].id}>
                <div className="content">
                    <div className='heading'><h2>{Data[props.page + 4].title}</h2>
                        <span className='img right'><img src={Data[props.page + 4].image} alt="logo" /></span>
                    </div>
                    <p>{Data[props.page + 4].content}</p>

                </div>
            </div>
            {props.loading ? <div className="text-center">loading data ...</div> : ""}
            {props.noData ? <div className="text-center">no data anymore ...</div> : ""}

            <div className={Data[props.page + 5].id % 2 === 0 ? 'container right' : 'container left'} key={Data[props.page + 5].id}>
                <div className="content">
                    <div className='heading'><h2>{Data[props.page + 5].title}</h2>
                        <span className='img right'><img src={Data[props.page + 5].image} alt="logo" /></span>
                    </div>
                    <p>{Data[props.page + 5].content}</p>

                </div>
            </div>
            {props.loading ? <div className="text-center">loading data ...</div> : ""}
            {props.noData ? <div className="text-center">no data anymore ...</div> : ""}


            <div className={Data[props.page + 6].id % 2 === 0 ? 'container right' : 'container left'} key={Data[props.page + 6].id}>
                <div className="content">
                    <div className='heading'><h2>{Data[props.page + 6].title}</h2>
                        <span className='img right'><img src={Data[props.page + 6].image} alt="logo" /></span>
                    </div>
                    <p>{Data[props.page + 6].content}</p>

                </div>
            </div>
            {props.loading ? <div className="text-center">loading data ...</div> : ""}
            {props.noData ? <div className="text-center">no data anymore ...</div> : ""}


            <div className={Data[props.page + 7].id % 2 === 0 ? 'container right' : 'container left'} key={Data[props.page + 7].id}>
                <div className="content">
                    <div className='heading'><h2>{Data[props.page + 7].title}</h2>
                        <span className='img right'><img src={Data[props.page + 7].image} alt="logo" /></span>
                    </div>
                    <p>{Data[props.page + 7].content}</p>

                </div>
            </div>
            {props.loading ? <div className="text-center">loading data ...</div> : ""}
            {props.noData ? <div className="text-center">no data anymore ...</div> : ""}


            <div className={Data[props.page + 8].id % 2 === 0 ? 'container right' : 'container left'} key={Data[props.page + 8].id}>
                <div className="content">
                    <div className='heading'><h2>{Data[props.page + 8].title}</h2>
                        <span className='img right'><img src={Data[props.page + 8].image} alt="logo" /></span>
                    </div>
                    <p>{Data[props.page + 8].content}</p>
                </div>
            </div>
            {props.loading ? <div className="text-center">loading data ...</div> : ""}
            {props.noData ? <div className="text-center">no data anymore ...</div> : ""}
        </div>
    )

}


export default Timeline;

