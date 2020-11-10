import React from "react";
import { jsPDF } from "jspdf";

export function jsPdfGenerator() {
    var doc = new jsPDF({
        orientation: "l",
        unit: "px",
        format: [998, 1135],
        // format: [1140, 1000],
        x: 5,
        y: 0,
    });

    doc.html(document.getElementById("report-container"), {
        callback: function (doc) {

            doc.save("PdfGenerated.pdf");
        },
    });
};
