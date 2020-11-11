import React from "react";
import { jsPDF } from "jspdf";

export function jsPdfGenerator() {
    var doc = new jsPDF({
        orientation: "l",
        unit: "px",
        format: [1100, 1200],
        // format: [1140, 1000],
        x: 5,
        y: 0,
    });
    let reportContainer = document.getElementById("report-container");
    reportContainer.classList.add("export-canvas")
    doc.html(reportContainer, {
        callback: function (doc) {
            let pageCount = doc.internal.getNumberOfPages();
            doc.deletePage(pageCount)
            doc.save("PdfGenerated.pdf");
        },
    });
    setTimeout(()=>{ reportContainer.classList.remove("export-canvas")
} ,3000)

}
   
