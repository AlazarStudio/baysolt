import React from "react";
import SectionMain from "../Sections/SectionMain/SectionMain";
import SectionProduction from "../Sections/SectionProduction/SectionProduction";
import GetData from "../GetData/GetData";

function ProductionPage({ children, ...props }) {
    let img = 'background_main.png';
    
    return (
        <>
            {/* <SectionMain img={img} /> */}
            <GetData tableName="item">
                {(data) => <SectionProduction productData={data} />} 
            </GetData>
        </>
    );
}

export default ProductionPage;