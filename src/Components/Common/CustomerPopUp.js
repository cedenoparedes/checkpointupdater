import React from 'react'
import customerIcon from '../../Images/SVG/icons/custumer.svg'


const CustomerPopUp = (props) => {

    const { setCustomer, customers, hidePopUps } = props;


    const setCustomerState = (id) => {
        const customerButton = document.getElementById(id);
        let customer = customerButton.nextElementSibling.textContent;
        hidePopUps();
        setCustomer(customer)
    }

    let tittle = "Select Customer"

    return (

        <div className="d-block w-100">
            <div className="backdrop" onClick={hidePopUps} id="backdrop"></div>
            <div className="row">
                <div className="col-12">
                    <div className="modal" id="modal-client">
                        <h1 className="modal-title">{tittle}</h1>
                        <div className="d-flex justify-content-between">

                            {customers.map((item, i) => {
                                return (
                                    <div key={i}>
                                        <button className="modal-btn btn-client" id={item.customerName} onClick={() => setCustomerState(item.customerName)}>
                                            <img className="format-img-costumer" src={customerIcon} alt="" />
                                        </button>
                                        <p className="modal-client-text">{item.customerName}</p>
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