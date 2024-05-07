import React, { useEffect } from "react";
import getDataFromDB from "./getDataFromDB";

function GetData({ tableName }) {
    useEffect(() => {
        const fetchData = async () => {
            try {
                const dataArray = await getDataFromDB(tableName);
                console.log("Data from database:", dataArray);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, [tableName]);

    return null; // Возвращаем null, так как компонент не отображает ничего на экране
}

export default GetData;
