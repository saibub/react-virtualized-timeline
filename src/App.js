import React, { useState } from "react";
import './App.css';
import Timeline from "./components/Timeline";
import Data from './data.json'

//Approach: (Sliding window technique). Consider a window of 6 cards. When our scroll bar hits bottom 
// of our page we increase our windowStartingIndex by 1 and thus our window will be shifted 1 unit right 
// and next Element would have been added. Similarly when scroll bar hits top, then we shift our window
// 1 unit left.

export default function App() {
    const [windowStartingIndex, setWindowStartingIndex] = useState(0);
    const [loading, setLoading] = useState(false);

    const length = Data.length;
    const windowLength = 6;   //Number of elements present in window at any time

    let lastWindowStartingIndex = length - windowLength;  //Last index our window can have

    // const scrollBarAdjust = 200;  //For re-adjusting our scrollbar when it hits top or bottom of our page

    window.onscroll = function () {
        //When scroll bar hits bottom of page
        if (window.innerHeight + window.pageYOffset >= document.body.offsetHeight) {
            loadScrollDown(windowStartingIndex);
            if (windowStartingIndex < lastWindowStartingIndex) {
                let lastElementOfWindow = document.getElementById(windowStartingIndex + windowLength+1);
                // console.log(elem)
                if (lastElementOfWindow) {
                    const rect = lastElementOfWindow.getBoundingClientRect();
                    // console.log(rect.height)
                    window.scrollBy(0, -rect.height);
                }
            }
        }

        //When scroll bar hits top of page    
        else if (window.pageYOffset <= 0 && windowStartingIndex >=1) {
            
                loadScrollUp(windowStartingIndex);
                let lastElementOfWindow = document.getElementById(windowStartingIndex);
                // console.log(elem)
                if (lastElementOfWindow) {
                    const rect = lastElementOfWindow.getBoundingClientRect();
                    // console.log(rect.height)
                    window.scrollBy(0, rect.height);
                }
                // window.scrollBy(0, scrollBarAdjust);
            
        }
    }
    //For rendering the elements on scroll Down
    const loadScrollDown = (windowStartingIndex) => {
        setLoading(true);
        if (windowStartingIndex < lastWindowStartingIndex) {
            setWindowStartingIndex(windowStartingIndex + 1);
        }
        setLoading(false);
    }

    //For rendering the elements on scroll Up
    const loadScrollUp = (windowStartingIndex) => {
        setLoading(true);
        if (windowStartingIndex > 0) {
            setWindowStartingIndex(windowStartingIndex - 1);
        }
        setLoading(false);
    }

    return (
        <div>
            <h2 className="heading"></h2>
            <div className="section">
                <div className="timeline">
                    <Timeline windowStartingIndex={windowStartingIndex} loading={loading} />
                </div>
            </div>
        </div>
    );
}

//Method 2 but more glitches



//Naming, scrollTop=10, const and vars, Timline repeat for loop, 