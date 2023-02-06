import "./ChangeGrantAmountCard.css";

function ChangeGrantAmountCard(changeGrantAmount) {
    return (

        <div className="ChangeGrantAmountGrid">
            <div className="ChangeGrantAmountItem1 ChangeGrantAmountItems">
                <p>Amount: </p>
                <input 
                    className="changeAmountInput"
                    type="text"
                    // defaultValue="Please enter proposed change amount..."
                    onChange={(e) => changeGrantAmount.amount(e.target.value)}
                />
            </div>
            <div className="ChangeGrantAmountItem2 ChangeGrantAmountItems">
                <p>Description: </p>
                <textarea
                    className="changeAmountDescription"
                    type="text"
                    // defaultValue="Please enter reason for proposed change amount..."
                    onChange={(e) => changeGrantAmount.description(e.target.value)}
                />
            </div>
            <div className="submitButton">
                <button key="submitButton" className="header-cta"><a onClick={null}>Submit</a></button>
            </div>
        </div>

    );
}

export default ChangeGrantAmountCard;