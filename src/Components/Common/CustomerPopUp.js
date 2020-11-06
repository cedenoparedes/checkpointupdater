import React from 'react'
import customerIcon from '../../Images/SVG/icons/custumer.svg'

const CustomerPopUp = (props) => {

    const { visible, setVisible, setCustomerState, customers } = props;

    const hidePopUp = () => {
        setVisible({
            contentVisibility: "",
            customerPopVisibility: "d-none",
            modelPopVisibility: "d-none",
            processPopVisibility: "d-none"
        })
    }

    const setCustomer = (id) => {
        const textClient = document.querySelector('#tb-customer');
        const customerButton = document.getElementById(id)
        textClient.value = customerButton.nextElementSibling.textContent;
        setCustomerState(textClient.value)
        hidePopUp();
    }

    let tittle = "Select A Customer"

    return (
        <div className={`${visible.customerPopVisibility} w-100`}>
            <div className="backdrop" onClick={hidePopUp} id="backdrop"></div>
            <div className="row">
                <div className="col-12">
                    <div className="modal" id="modal-client">
                        <h1 className="modal-title">{tittle}</h1>
                        <div className="d-flex justify-content-between">

                            {customers.map((item, i) => {
                                return (

                                    <div key={i}>
                                        <button className="modal-btn btn-client" id={item.CostumerName} onClick={() => setCustomer(item.CostumerName)}>
                                            <img className="format-img-costumer" src={customerIcon} alt="" />
                                        </button>
                                        <p className="modal-client-text">{item.CostumerName}</p>
                                    </div>)
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CustomerPopUp;