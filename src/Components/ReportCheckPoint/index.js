import React from "react";
import ReportCheckPointForm from "./ReportCheckPointForm";
import "../../../node_modules/jquery/dist/jquery.slim.min.js";
import "../../../node_modules/popper.js/dist/umd/popper.min";
import "../../../node_modules/bootstrap/dist/js/bootstrap.min";
import moment from "moment/dist/moment";
// import "./bootstrap-datepicker";

const index = () => {
  function myFuntion2() {
    this.getElementById("#tb-date").datepicker({
      dateFormat: "DD-MM-YYYY H:mmTT",
    });
  }

  function myFunction() {
    let click = document.getElementById("tb-date");
    click.click();
    click.focus();
  }

  return <ReportCheckPointForm />;
};

export default index;
