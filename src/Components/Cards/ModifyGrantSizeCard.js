import "./ModifyGrantSizeCard.css";

function ModifyGrantSizeCard(props) {
    function submitChangeAmount () {
        props.sendAmountChange();

    }

    return (

        <div className="ModifyGrantSizeGrid">
            <div className="ModifyGrantSizeItem1 ModifyGrantSizeItems">
                <p>Amount: </p>
                <input
                    className="changeAmountInput"
                    type="text"
                    onChange={(e) => props.setModifyGrantSizeAmount(e.target.value)}
                />
            </div>
            <div className="ModifyGrantSizeItem2 ModifyGrantSizeItems">
                <p>Description: </p>
                <textarea
                    className="changeAmountDescription"
                    type="text"
                    onChange={(e) => props.setModifyGrantSizeDescription(e.target.value)}
                />
            </div>
            <div className="submitButton">
                <button key="submitButton" className="header-cta"><a onClick={submitChangeAmount}>Submit</a></button>
            </div>
        </div>

    );
}

export default ModifyGrantSizeCard;