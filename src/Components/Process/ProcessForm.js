import React, { useState, useContext, useEffect } from "react";
import PassCheck from "../../Images/SVG/icons/check-symbol.svg";
import FailSymbol from "../../Images/SVG/icons/cancel.svg";
import RefreshIcon from "../../Images/SVG/icons/refresh.svg";
import PieChart from "../PieChart";
import FailuresWindows from "./FailuresWindow";
import { Link } from "react-router-dom";
import GlobalContext from '../../context/globalcontext';
import { getFailures, saveProcess } from '../../api/process-api'
import toastr from 'toastr'


const ProcessForm = (props) => {
	//Here we are getting the token
	const [, , contextMiddleware] = useContext(GlobalContext);
	const [failures, setFailures] = useState([]);
	const [passParams, setPassParams] = useState({})
	const userInfo = contextMiddleware.getTokenClaims();
	const token = contextMiddleware.getToken()

	//Here we are destructing the props 
	const {
		model,
		process,
		customer,
		fillPieParams,
		totalPass,
		TotalFail,
		TotalProcessed,
		setTotalPass,
		setTotalFail,
		setTotalProcessed
	} = props

	useEffect(() => {
		fillPieParams(customer, model, process, token);

		getFailures(customer, model, process, token)
			.then((Response) => {
				if (Response === null) {
					toastr.error("no failures")
				} else {

					setFailures(Response)
				}
			}).catch((error) => { console.log(error) })

		setPassParams({
			CustomerCode: customer,
			ProcessName: process,
			ModelName: model,
			Result: "pass",
			EmployeeCode: userInfo.employeeCode,
			FailureId: []
		})

	}, [])

	//The following state and Funtion controls the visibility of the FailuresWindow
	const [visible, setVisible] = useState("d-none");
	const showFailureWindows = () => {
		if (visible === "") {
			setVisible("d-none");
		} else {
			setVisible("");
		}
	};



	/// pass method handler
	const passHandler = (passParams, token) => {
		saveProcess(passParams, token)
			.then((Response) => {
				setTotalPass(Response.TotalPass)
				setTotalFail(Response.TotalFail)
				setTotalProcessed(Response.TotalProcessed)
			}).catch((error) => { console.log(error) })
	}
	return (
		<div className="container-fluid h-90">
			<div className="row">
				<div className="col-6">
					<nav aria-label="breadcrumb">
						<ol className="breadcrumb">
							<li className="breadcrumb-item"> <a href="../menu">Home</a></li>
							<li className="breadcrumb-item"><a href="../CheckPointProcessMenu">Checkpoint</a></li>
							<li className="breadcrumb-item active" aria-current="page">Process</li>
						</ol>
					</nav>
				</div>
				<div className="col-6">
					<div className="d-flex justify-content-end">
						<p className="text">Customer: {customer}</p>
						<p className="division"> | </p>
						<p className="text">Model: {model}</p>
						<p className="division"> | </p>
						<p className="text">Process: {process}</p>
					</div>
				</div>
			</div>
			<div className="contenedor">
				<div className="container-fluid">
					<div className={`${visible === "d-none" ? "" : "d-none"} process-window `} id="process-window">
						<div className="row justify-content-center align-items-center">
							<div className="col-3">
								<div onClick={() => passHandler(passParams, token)} className="d-flex  justify-content-center align-items-center button-pass-fail button-pass-position-color hoverbuttons" id="pass-btn">
									<div>
										<img className="icon-pass" src={PassCheck} alt="" />
									</div>
									<div className="txt-porcentage">
										<p className="percentage">{totalPass}</p>
									</div>
								</div>
							</div>
							<div className="col-6">
								<div className="chart1">
									<PieChart totalPass={totalPass} TotalFail={TotalFail} TotalProcessed={TotalProcessed} />
								</div>
							</div>
							<div className="col-3">
								{/* button fail */}
								<div onClick={showFailureWindows} className="d-flex  justify-content-center align-items-center button-pass-fail button-fail-position-color hoverbuttons" id="fail-btn" >
									<div>
										<img className="icon-fail" id="icon-fail-margin" src={FailSymbol} alt="" />
									</div>
									<div className="txt-porcentage">
										<p className="percentage">{TotalFail}</p>
									</div>
								</div>
							</div>
						</div>
						{/* Back and Refresh Buttons */}
						<div className="row pt-5">
							<div className="col-12 d-flex justify-content-center">
								<Link to='../processMenu' style={{ color: 'inherit', textDecoration: 'inherit' }}>
									<div className="back-refresh-btn justify-content-center">
										<img src={RefreshIcon} alt="" />
										<p className="btn-lbl">Refresh</p>
									</div>
								</Link>
							</div>
						</div>
					</div>
					<FailuresWindows
						visible={visible}
						setVisible={setVisible}
						failures={failures}
						model={model}
						process={process}
						customer={customer}
						setTotalPass={setTotalPass}
						setTotalFail={setTotalFail}
						setTotalProcessed={setTotalProcessed}

					/>

				</div>
			</div>
		</div>
	);
};
export default ProcessForm;
