import React from "react";
import ReportCheckPointForm from "./ReportCheckPointForm";
import $ from 'jquery';
import "./bootstrap-datepicker"
import "./bootstrap-datepicker.css"


const index = () => {
  $(function () {
    console.log('Jquery esta funcionando');
    $("#tb-date").datepicker({ dateFormat: 'DD-MM-YYYY H:mmTT' },
      console.log('funciona abajo')
    );
  });

  function clickFunction() {
    let click = document.getElementById("tb-date")
    click.click()
    click.focus()
  }

  return <ReportCheckPointForm clickFunction={clickFunction}/>;
};

export default index;
