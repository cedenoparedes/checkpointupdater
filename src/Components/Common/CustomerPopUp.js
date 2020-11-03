import React from 'react'
import customerIcon from '../../Images/SVG/icons/custumer.svg'

const CustomerPopUp = () => {

    let tittle = "Select A Customer"
    let items = [
        {
            customerCode: 615
        },
        {
            customerCode: 564
        },
        {
            customerCode: 264
        },
        {
            customerCode: 3636
        }
    ]

    return (
        <div className="modal" id="modal-client">
            <h1 className="modal-title">{tittle}</h1>
            <div className="d-flex justify-content-center">

                {items.map((item, i) => {
                    { console.log(i) }
                    return (

                        <div>
                            <button className="format-btn modal-btn btn-client" id>
                                <img className="format-img-costumer" src={customerIcon} alt="" />
                            </button>
                            <p className="modal-client format-txt-icon">{item.customerCode}</p>
                        </div>)
                })}
            </div>
        </div>
    )
}

export default CustomerPopUp;