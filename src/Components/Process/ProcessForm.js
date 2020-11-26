import React, { useState, useContext, useEffect } from "react";
import PassCheck from "../../Images/SVG/icons/check-symbol.svg";
import FailSymbol from "../../Images/SVG/icons/cancel.svg";
import RefreshIcon from "../../Images/SVG/icons/refresh.svg";
import PieChart from "../PieChart";
import FailuresWindows from "./FailuresWindow";
import { Link, useLocation, useHistory } from "react-router-dom";
import GlobalContext from '../../context/globalcontext';
import { getFailures, saveProcess, getPieParams } from '../../api/process-api'
import Loading from '../Common/Loading'
import toastr from 'toastr'


const ProcessForm = (props) => {
	const location = useLocation();
	//Here we are getting the token
	const [contextState, , contextMiddleware] = useContext(GlobalContext);
	const [failures, setFailures] = useState([]);
	const [passParams, setPassParams] = useState({})
	const [chartRefrechData, setChartRefrechData] = useState({})
	const userInfo = contextMiddleware.getTokenClaims();
	const token = contextMiddleware.getToken()
	const model = location.state.model
	const customer = location.state.customer
	const process = location.state.process
	const [totalPass, setTotalPass] = useState()
	const [totalFail, setTotalFail] = useState()
	const [totalProcessed, setTotalProcessed] = useState()
	const [isLoading, setIsloading] = useState(false)
	const history = useHistory();

	//Language
	const [homeLabel, setHomeLabel] = useState("")
	const [checkPointLabel, setCheckPointLabel] = useState("")
	const [processLabel, setProcessLabel] = useState("")
	const [customerLabel, setCustomerLabel] = useState("")
	const [modelLabel, setModelLabel] = useState("")
	const [refreshLabel, setRefresh] = useState("")






	let messageLabel = contextState.languageLabel
	useEffect(() => {

		const setMessageLabel = (messages, messageCode) => {
			if (messages === [] || messages === undefined) {
				console.log("estoy en bre")
			} else {
				const found = messages.find(element => element.messageCode === messageCode)
				if (found === undefined) {
					return
				} else {
					return found.message
				}
			}

		}

		setHomeLabel(setMessageLabel(messageLabel, "CHK02"))
		setCheckPointLabel(setMessageLabel(messageLabel, "CHK05"))
		setProcessLabel(setMessageLabel(messageLabel, "CHK08"))
		setCustomerLabel(setMessageLabel(messageLabel, "CHK28"))
		setModelLabel(setMessageLabel(messageLabel, "CHK20"))
		setRefresh(setMessageLabel(messageLabel, "CHK22"))

	}, [messageLabel])


	const errorResponse = message => {
		setIsloading(true)
		setTimeout(() => {
			toastr.error(message)
			setIsloading(false)
		}, 1000);
	}


	//Here we are destructing the props 

	useEffect(() => {


		getPieParams(customer, model, process, token)
			.then((Response) => {
				setTotalPass(Response.totalPass)
				setTotalFail(Response.totalFail)
				setTotalProcessed(Response.totalProcessed)
			})

			.catch(
				(error) => {
					console.log(error)
					history.push("/processMenu");
					console.log(error)
					const Error = error.message;
					if (Error === 'Failed to fetch') {
						errorResponse('Network Error')
					}
					else if (Error === '401: unauthorized') {
						errorResponse('User not Found or Unauthorized')
					}
					else if (Error === '402: unauthorized') {
						errorResponse('Error 402: Unauthorized')
					}
					else if (Error === '404: not found') {
						errorResponse('Error 404: Not Found')
					}

					//document.getElementById("tb-customer").value = ""
				}
			)

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

	useEffect(() => {
		setTotalPass(chartRefrechData.totalPass)
		setTotalFail(chartRefrechData.totalFail)
		setTotalProcessed(chartRefrechData.totalProcessed)
	}, [chartRefrechData])


	// The following state and Funtion controls the visibility of the FailuresWindow

	const [visible, setVisible] = useState("d-none");
	const showFailureWindows = () => {
		if (visible === "") {
			setVisible("d-none");
		} else {
			setVisible("");
		}
	};



	// pass method handler
	const passHandler = (passParams, token) => {
		saveProcess(passParams, token)
			.then((Response) => {
				setChartRefrechData(Response)
			}).catch((error) => { console.log(error) })
	}
	return (
		<div className="container-fluid h-90">
			{ isLoading === false ? null : <Loading />}
			<div className="row">
				<div className="col-6">
					<nav aria-label="breadcrumb">
						<ol className="breadcrumb">
							<li className="breadcrumb-item"> <a href="../menu">{homeLabel}</a></li>
							<li className="breadcrumb-item"><a href="../CheckPointProcessMenu">{checkPointLabel}</a></li>
							<li className="breadcrumb-item active" aria-current="page">{processLabel}</li>
						</ol>
					</nav>
				</div>
				<div className="col-6">
					<div className="d-flex justify-content-end">
						<p className="text">{customerLabel}: {customer}</p>
						<p className="division"> | </p>
						<p className="text">{modelLabel}: {model}</p>
						<p className="division"> | </p>
						<p className="text">{processLabel}: {process}</p>
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
									<PieChart TotalPass={totalPass} TotalFail={totalFail} TotalProcessed={totalProcessed} />
								</div>
							</div>
							<div className="col-3">
								{/* button fail */}
								<div onClick={showFailureWindows} className="d-flex  justify-content-center align-items-center button-pass-fail button-fail-position-color hoverbuttons" id="fail-btn" >
									<div>
										<img className="icon-fail" id="icon-fail-margin" src={FailSymbol} alt="" />
									</div>
									<div className="txt-porcentage">
										<p className="percentage">{totalFail}</p>
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
										<p className="btn-lbl">{refreshLabel}</p>
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
