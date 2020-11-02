import React from "react";
import $ from "../../../node_modules/jquery/dist/jquery";

const dt = () => {
  $(function () {
    $("#tb-date").datepicker({ dateFormat: "DD-MM-YYYY H:mmTT" });
  });

  function myFunction() {
    let click = document.getElementById("tb-date");
    click.click();
    click.focus();
  }
};

export default dt;
