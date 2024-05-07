import React, { useEffect, useState } from "react";
import getDataFromDB from "./getDataFromDB";

function GetDataItem({ tableName, id, children }) {
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const dataArray = await getDataFromDB(tableName, id);
                setData(dataArray);
            } catch (error) {
                setError(error);
            }
        };

        fetchData();
    }, [tableName]);

    if (error) {
        return <div>Error fetching data: {error.message}</div>;
    }

    return children(data);
}

export default GetDataItem;
