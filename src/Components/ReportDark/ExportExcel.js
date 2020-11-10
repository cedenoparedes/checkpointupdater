import React, { Component } from 'react';
import ReactExport from 'react-data-export';
import jsondata from "./jsondata.json"
import ExcelIcon from "../../Images/SVG/icons/excel.svg";
import { getTableData } from "../../api/report-api"

const ExcelFile = ReactExport.ExcelFile;
const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;



const ExportToExcel = () => {
    const exportExelHandler = () => {
        getTableData(customer, model, process, '2020-11-10', token)
            .then((Response) => {

                let arreglo = [];

                console.log('entre');
                Response.forEach(element => {
                    let obj = [];
                    for (const key in element) {
                        obj.push({ value: element[key] });

                    }
                    arreglo.push(obj);
                    console.log(arreglo)
                }
let dataset = [
                    {
                        columns: [{ title: "Date", widthPx: 100, style: { font: { sz: "16", bold: true } }, },
                        { title: "Time", widthPx: 100, style: { font: { sz: "16", bold: true } }, },
                        { title: "CustomerCode", widthPx: 100, style: { font: { sz: "16", bold: true } }, },
                        { title: "ProcessName", widthPx: 100, style: { font: { sz: "16", bold: true } }, },
                        { title: "ModelName", widthPx: 100, style: { font: { sz: "16", bold: true } }, },
                        { title: "Result", widthPx: 100, style: { font: { sz: "16", bold: true } }, },
                        { title: "FailureName", widthPx: 100, style: { font: { sz: "16", bold: true } }, },
                        { title: "UserName", widthPx: 100, style: { font: { sz: "16", bold: true } }, }],
                        data: arreglo
                    }];

            })
            .catch((error) => { console.log(error) })
    }

    return (
        <div className="exporticon">
            <ExcelFile element={<img type="button" src={ExcelIcon} alt="" onClick={RellenarArreglo} />}>
                <ExcelSheet dataSet={dataset} name="Organization" />
            </ExcelFile>
        </div>
    );

}



export default ExportToExcel;
