import { useState } from "react";

export function useFilter (dataArray, callBack){ // dataArray: data to given filter, callBack: to know what exact filed we want filter from data 
    const [query, setQuery] = useState('');
    console.log(query)

    // console.log(dataArray)
    const filteredData =  dataArray.filter(item => callBack(item).includes(query));

    return [filteredData, setQuery]
}