import React,{useState} from 'react';
import Activity from './components/Activity';
import Report from './components/Report';
import data from './data.json'
const App = () => {
    const [category, setCategory] = useState("weekly");
    let activity='';
    switch (category) {
        case 'daily':
             activity = data.map((elem) => (
                <Activity
                    title={elem.title}
                    current={elem.timeframes.daily.current}
                    previous={elem.timeframes.daily.previous}
                />
            ));
            break;
        case 'weekly':
             activity = data.map((elem) => (
                <Activity
                    title={elem.title}
                    current={elem.timeframes.weekly.current}
                    previous={elem.timeframes.weekly.previous}
                />
            ));
            break;
        case 'monthly':
             activity = data.map((elem) => (
                <Activity
                    title={elem.title}
                    current={elem.timeframes.monthly.current}
                    previous={elem.timeframes.monthly.previous}
                />
            ));
            break;
        default:
            break;
    }
    
    return (
        <div>
            <Report setCategory={setCategory}/>
            {activity}
        </div>
    );
}

export default App;
