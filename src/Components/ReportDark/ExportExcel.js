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
                                {
                                    title: "Date", width: { wpx: 120 }, style: {
                                        font: { name: "Century Gothic", sz: "10", bold: true, patternType: "solid", color: { rgb: "FFFFFF" } },
                                        fill: { patternType: "solid", fgColor: { rgb: "343232" } },
                                        alignment: { vertical: "center", horizontal: "center" }
                                    },
                                },
                                {
                                    title: "Time", width: { wpx: 120 }, style: {
                                        font: { name: "Century Gothic", sz: "10", bold: true, patternType: "solid", color: { rgb: "FFFFFF" } },
                                        fill: { patternType: "solid", fgColor: { rgb: "343232" } },
                                        alignment: { vertical: "center", horizontal: "center" }
                                    },
                                },
                                {
                                    title: "CustomerCode", width: { wpx: 120 }, style: {
                                        font: { name: "Century Gothic", sz: "10", bold: true, patternType: "solid", color: { rgb: "FFFFFF" } },
                                        fill: { patternType: "solid", fgColor: { rgb: "343232" } },
                                        alignment: { vertical: "center", horizontal: "center" }
                                    },
                                },
                                {
                                    title: "ProcessName", width: { wpx: 120 }, style: {
                                        font: { name: "Century Gothic", sz: "10", bold: true, patternType: "solid", color: { rgb: "FFFFFF" } },
                                        fill: { patternType: "solid", fgColor: { rgb: "343232" } },
                                        alignment: { vertical: "center", horizontal: "center" }
                                    },
                                },
                                {
                                    title: "ModelName", width: { wpx: 120 }, style: {
                                        font: { name: "Century Gothic", sz: "10", bold: true, patternType: "solid", color: { rgb: "FFFFFF" } },
                                        fill: { patternType: "solid", fgColor: { rgb: "343232" } },
                                        alignment: { vertical: "center", horizontal: "center" }
                                    },
                                },
                                {
                                    title: "Result", width: { wpx: 120 }, style: {
                                        font: { name: "Century Gothic", sz: "10", bold: true, patternType: "solid", color: { rgb: "FFFFFF" } },
                                        fill: { patternType: "solid", fgColor: { rgb: "343232" } },
                                        alignment: { vertical: "center", horizontal: "center" }
                                    },
                                },
                                {
                                    title: "FailureName", width: { wpx: 120 }, style: {
                                        font: { name: "Century Gothic", sz: "10", bold: true, patternType: "solid", color: { rgb: "FFFFFF" } },
                                        fill: { patternType: "solid", fgColor: { rgb: "343232" } },
                                        alignment: { vertical: "center", horizontal: "center" }
                                    },
                                },
                                {
                                    title: "UserName", width: { wpx: 120 }, style: {
                                        font: { name: "Century Gothic", sz: "10", bold: true, patternType: "solid", color: { rgb: "FFFFFF" } },
                                        fill: { patternType: "solid", fgColor: { rgb: "343232" } },
                                        alignment: { vertical: "center", horizontal: "center" }
                                    },
                                }
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