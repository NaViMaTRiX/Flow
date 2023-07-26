import { useEffect, useState } from "react";

function Timer(props: any) {

    const [seconds, setSeconds] = useState(props.value * 60);
    const [isPause, setIsPause] = useState(false);

    const minutesString = String(Math.floor(seconds / 60)).padStart(2, "0");
    const secondsString = String(seconds % 60).padStart(2, "0");

    function runTimer() {
        setIsPause(!isPause);
        if (isPause) {
            useEffect(() => {
                setInterval(() => {
                    setSeconds((seconds) => Math.max(seconds - 1, 0));
                }, 1000);
            }, []);
        }
    }

    return (
        <>
            <h1>{minutesString}:{secondsString}</h1>
        </>
    );
}

export default Timer;