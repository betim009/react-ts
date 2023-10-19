import { useEffect, useState } from "react";

function Iss() {

    const [iss, setIss] = useState([])

    useEffect(() => {
        fecthData();
    }, []);

    const fecthData = async () => {
        const res = await fetch('https://api.wheretheiss.at/v1/satellites/25544');
        console.log(res);
    }


    
    return (
        <div className="">
        </div>
    );
}

export default Iss;
