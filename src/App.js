import React, { useState } from "react";
import './App.css';
import Timeline from "./components/Timeline";

export default function App() {

    const [page, setPage] = useState(0);
    const [loading, setLoading] = useState(false);
    const [noData, setNoData] = useState(false);

    window.onscroll = function () {
        if (window.innerHeight + window.pageYOffset >= document.body.offsetHeight) {
            if (!noData) {
                loadUserList(page);
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
        if (page < 19) {
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
                    <div className="detect"></div>
                    <Timeline page={page} loading={loading} noData={noData} />
                </div>
            </div>
        </div>
    );
}