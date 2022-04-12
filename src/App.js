import React, { useState } from "react";
import './App.css';
import Timeline from "./components/Timeline";
import Data from './data.json'

export default function App() {

    const [page, setPage] = useState(0);
    const [loading, setLoading] = useState(false);

    const length = Data.length;
    const offset = 9;

    window.onscroll = function () {
        if (window.innerHeight + window.pageYOffset >= document.body.offsetHeight) {

                loadUserList(page);
                if (page < length - offset) {
                    window.scrollBy(0, -200);
                }
            
        }
        else if (window.pageYOffset <= 10) {
            if (page >= 1) {
                reloadUserList(page);
                window.scrollBy(0, 200);
            }
        }
    }

    const loadUserList = (page) => {
        setLoading(true);
        if (page < length - offset) {
            setPage(page + 1);
        }
        setLoading(false);
    }

    const reloadUserList = (page) => {
        setLoading(true);
        if (page > 0) {
            setPage(page - 1);
        }
        setLoading(false);
    }

    return (
        <div>
            <h2 className="PageHeading text-center"></h2>
            <div className="section">
                <div className="timeline">
                    <Timeline page={page} loading={loading} />
                </div>
            </div>
        </div>
    );
}