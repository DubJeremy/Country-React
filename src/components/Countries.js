import React, { useState } from 'react';
import axios from "axios";

const Countries = () => {
    const [data, setData] = useState([]);

    axios.get(
        'https://restcountries.com/v3.1/all?fields=name;population;region;capital;flag'
        )
        .then((res) => console.log(res))

    return (
        <div>

        </div>
    );
};

export default Countries;