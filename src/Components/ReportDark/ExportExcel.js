import React, { useState, useEffect } from 'react';
import ReactExport from 'react-data-export';
import jsondata from "./jsondata.json"
import ExcelIcon from "../../Images/SVG/icons/excel.svg";
import { getTableData } from "../../api/report-api"

const ExcelFile = ReactExport.ExcelFile;
const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;



const ExportToExcel = (props) => {
    const { customer, model, process, token } = props
    const [excelData, setExcelData] = useState([]);


    useEffect(() => {
        getTableData(customer, model, process, '2020-11-10', token)
            .then((Response) => {
                console.log('david');
                let arreglo = [];

                Response.forEach(element => {
                    let obj = [];
                    for (const key in element) {
                        obj.push({ value: element[key] });

                    }
                    arreglo.push(obj);
                })
                
                setExcelData([

                    {
                        columns:
                            [
                                { title: "Date", widthPx: 100, style: { font: { sz: "16", bold: true } }, },
                                { title: "Time", widthPx: 100, style: { font: { sz: "16", bold: true } }, },
                                { title: "CustomerCode", widthPx: 100, style: { font: { sz: "16", bold: true } }, },
                                { title: "ProcessName", widthPx: 100, style: { font: { sz: "16", bold: true } }, },
                                { title: "ModelName", widthPx: 100, style: { font: { sz: "16", bold: true } }, },
                                { title: "Result", widthPx: 100, style: { font: { sz: "16", bold: true } }, },
                                { title: "FailureName", widthPx: 100, style: { font: { sz: "16", bold: true } }, },
                                { title: "UserName", widthPx: 100, style: { font: { sz: "16", bold: true } }, }
                            ],
                        data: arreglo
                    }]
                );
            })
            .catch((error) => { console.log(error) })
    }, [customer, model, process])
    
    const exportExelHandler = () => {

    }

    return (
        <div className="exporticon">
            <ExcelFile element={<img type="button" src={ExcelIcon} alt="" onClick={exportExelHandler} />}>
                <ExcelSheet dataSet={excelData} name="Organization" />
            </ExcelFile>
        </div>
    );

}



export default ExportToExcel;


/*const  RellenarArreglo = (jsondata)=> {
     jsondata.forEach(element => {
         let obj = [];
         for (const key in element) {
             obj.push({ value: element[key] });
         }
         arreglo.push(obj);
         console.log(arreglo)
     })
 }*/