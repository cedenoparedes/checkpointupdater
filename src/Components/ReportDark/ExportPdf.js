import React from "react";
import { jsPDF } from "jspdf";

export function jsPdfGenerator() {
    var doc = new jsPDF({
        orientation: "p",
        unit: "px",
        format: [1140, 2190.65],
        // format: [1140, 1000],
        x: 0,
        y: 0,
    });

    doc.html(document.getElementById("report-container"), {
        callback: function (doc) {
            doc.save("PdfGenerated.pdf");
        },
    });
};
