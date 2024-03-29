import React, { useState, useEffect } from 'react';
import ReactExport from 'react-data-export';
import ExcelIcon from "../../Images/SVG/icons/excel.svg";
import images from '../Common/Images/index'
import { getTableData } from "../../api/report-api"

const ExcelFile = ReactExport.ExcelFile;
const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;


const ExportToExcel = (props) => {
    const { customer, model, process, date, token } = props
    const [excelData, setExcelData] = useState([]);

    const litlesheet = ['']


    useEffect(() => {
        getTableData(customer, model, process, date, token)
            .then((Response) => {
                let arreglo = [];

                Response.forEach(element => {
                    let obj = [];
                    for (const key in element) {
                        obj.push({

                            value: element[key], style: {
                                font: { name: "Century Gothic", sz: "10", bold: false, patternType: "solid", color: { rgb: "000000" } },
                                fill: { patternType: "solid", fgColor: { rgb: "DAEEF3" } },
                                alignment: { vertical: "center", horizontal: "center" },
                                border: {
                                    top: { style: "medium", color: { rgb: "343232" } }, bottom: { style: "medium", color: { rgb: "343232" } },
                                    left: { style: "medium", color: { rgb: "343232" } }, right: { style: "medium", color: { rgb: "343232" } },
                                    diagonal: { style: "medium", color: { rgb: "343232" } }
                                }
                            },

                        });

                    }


                    arreglo.push(litlesheet.concat(obj));


                })

                setExcelData([

                    {

                        columns:
                            [
                                {
                                    title: customer + "-" + model + "-" + process + "-" + date, width: { wpx: 200 }, style: {
                                        font: { name: "Century Gothic", sz: "20", bold: true, patternType: "solid", color: { rgb: "974706" } },
                                        alignment: { vertical: "center", horizontal: "center", wrapText: true }
                                    },
                                },
                                {
                                    title: "Date", width: { wpx: 120 }, style: {
                                        font: { name: "Century Gothic", sz: "10", bold: true, patternType: "solid", color: { rgb: "FFFFFF" } },
                                        fill: { patternType: "solid", fgColor: { rgb: "215967" } },
                                        alignment: { vertical: "center", horizontal: "center" },
                                        border: {
                                            top: { style: "medium", color: { rgb: "343232" } }, bottom: { style: "medium", color: { rgb: "343232" } },
                                            left: { style: "medium", color: { rgb: "343232" } }, right: { style: "medium", color: { rgb: "343232" } },
                                            diagonal: { style: "medium", color: { rgb: "FFFFFF" } }
                                        }
                                    },
                                },
                                {
                                    title: "Time", width: { wpx: 120 }, style: {
                                        font: { name: "Century Gothic", sz: "10", bold: true, patternType: "solid", color: { rgb: "FFFFFF" } },
                                        fill: { patternType: "solid", fgColor: { rgb: "215967" } },
                                        alignment: { vertical: "center", horizontal: "center" },
                                        border: {
                                            top: { style: "medium", color: { rgb: "343232" } }, bottom: { style: "medium", color: { rgb: "343232" } },
                                            left: { style: "medium", color: { rgb: "343232" } }, right: { style: "medium", color: { rgb: "343232" } },
                                            diagonal: { style: "medium", color: { rgb: "FFFFFF" } }
                                        }
                                    },
                                },
                                {
                                    title: "CustomerCode", width: { wpx: 120 }, style: {
                                        font: { name: "Century Gothic", sz: "10", bold: true, patternType: "solid", color: { rgb: "FFFFFF" } },
                                        fill: { patternType: "solid", fgColor: { rgb: "215967" } },
                                        alignment: { vertical: "center", horizontal: "center" },
                                        border: {
                                            top: { style: "medium", color: { rgb: "343232" } }, bottom: { style: "medium", color: { rgb: "343232" } },
                                            left: { style: "medium", color: { rgb: "343232" } }, right: { style: "medium", color: { rgb: "343232" } },
                                            diagonal: { style: "medium", color: { rgb: "FFFFFF" } }
                                        }
                                    },
                                },
                                {
                                    title: "ProcessName", width: { wpx: 120 }, style: {
                                        font: { name: "Century Gothic", sz: "10", bold: true, patternType: "solid", color: { rgb: "FFFFFF" } },
                                        fill: { patternType: "solid", fgColor: { rgb: "215967" } },
                                        alignment: { vertical: "center", horizontal: "center" },
                                        border: {
                                            top: { style: "medium", color: { rgb: "343232" } }, bottom: { style: "medium", color: { rgb: "343232" } },
                                            left: { style: "medium", color: { rgb: "343232" } }, right: { style: "medium", color: { rgb: "343232" } },
                                            diagonal: { style: "medium", color: { rgb: "FFFFFF" } }
                                        }
                                    },
                                },
                                {
                                    title: "ProcessStep", width: { wpx: 120 }, style: {
                                        font: { name: "Century Gothic", sz: "10", bold: true, patternType: "solid", color: { rgb: "FFFFFF" } },
                                        fill: { patternType: "solid", fgColor: { rgb: "215967" } },
                                        alignment: { vertical: "center", horizontal: "center" },
                                        border: {
                                            top: { style: "medium", color: { rgb: "343232" } }, bottom: { style: "medium", color: { rgb: "343232" } },
                                            left: { style: "medium", color: { rgb: "343232" } }, right: { style: "medium", color: { rgb: "343232" } },
                                            diagonal: { style: "medium", color: { rgb: "FFFFFF" } }
                                        }
                                    },
                                },
                                {
                                    title: "ModelName", width: { wpx: 120 }, style: {
                                        font: { name: "Century Gothic", sz: "10", bold: true, patternType: "solid", color: { rgb: "FFFFFF" } },
                                        fill: { patternType: "solid", fgColor: { rgb: "215967" } },
                                        alignment: { vertical: "center", horizontal: "center" },
                                        border: {
                                            top: { style: "medium", color: { rgb: "343232" } }, bottom: { style: "medium", color: { rgb: "343232" } },
                                            left: { style: "medium", color: { rgb: "343232" } }, right: { style: "medium", color: { rgb: "343232" } },
                                            diagonal: { style: "medium", color: { rgb: "FFFFFF" } }
                                        }
                                    },
                                },
                                {
                                    title: "Result", width: { wpx: 120 }, style: {
                                        font: { name: "Century Gothic", sz: "10", bold: true, patternType: "solid", color: { rgb: "FFFFFF" } },
                                        fill: { patternType: "solid", fgColor: { rgb: "215967" } },
                                        alignment: { vertical: "center", horizontal: "center" },
                                        border: {
                                            top: { style: "medium", color: { rgb: "343232" } }, bottom: { style: "medium", color: { rgb: "343232" } },
                                            left: { style: "medium", color: { rgb: "343232" } }, right: { style: "medium", color: { rgb: "343232" } },
                                            diagonal: { style: "medium", color: { rgb: "FFFFFF" } }
                                        }
                                    },
                                },
                                {
                                    title: "FailureName", width: { wpx: 120 }, style: {
                                        font: { name: "Century Gothic", sz: "10", bold: true, patternType: "solid", color: { rgb: "FFFFFF" } },
                                        fill: { patternType: "solid", fgColor: { rgb: "215967" } },
                                        alignment: { vertical: "center", horizontal: "center" },
                                        border: {
                                            top: { style: "medium", color: { rgb: "343232" } }, bottom: { style: "medium", color: { rgb: "343232" } },
                                            left: { style: "medium", color: { rgb: "343232" } }, right: { style: "medium", color: { rgb: "343232" } },
                                            diagonal: { style: "medium", color: { rgb: "FFFFFF" } }
                                        }
                                    },
                                },
                                {
                                    title: "UserName", width: { wpx: 120 }, style: {
                                        font: { name: "Century Gothic", sz: "10", bold: true, patternType: "solid", color: { rgb: "FFFFFF" } },
                                        fill: { patternType: "solid", fgColor: { rgb: "215967" } },
                                        alignment: { vertical: "center", horizontal: "center" },
                                        border: {
                                            top: { style: "medium", color: { rgb: "343232" } }, bottom: { style: "medium", color: { rgb: "343232" } },
                                            left: { style: "medium", color: { rgb: "343232" } }, right: { style: "medium", color: { rgb: "343232" } },
                                            diagonal: { style: "medium", color: { rgb: "FFFFFF" } }
                                        }
                                    },
                                }
                            ],
                        data: arreglo

                    }]
                );
            })
            .catch((error) => { console.log(error) })
    }, [])

    const exportExelHandler = () => {

    }

    return (
        <div className="exporticon">
            <ExcelFile filename="Check Point Data" element={<img src={images.excelIcon} alt="" onClick={exportExelHandler} />}>
                <ExcelSheet dataSet={excelData} name={customer + "-" + model + "-" + process + "-" + date} />
            </ExcelFile>
        </div>
    );

}



export default ExportToExcel;
