import "./ChangeGrantAmountCard.css";

function ChangeGrantAmountCard(props) {
    function submitChangeAmount () {
        props.sendAmountChange();
        props.newProposalToPending();

    }

    return (

        <div className="ChangeGrantAmountGrid">
            <div className="ChangeGrantAmountItem1 ChangeGrantAmountItems">
                <p>Amount: </p>
                <input
                    className="changeAmountInput"
                    type="text"
                    onChange={(e) => props.setChangeGrantAmount({ ...props.changeGrantAmount, amount: e.target.value + " ETH"})}
                />
            </div>
            <div className="ChangeGrantAmountItem2 ChangeGrantAmountItems">
                <p>Description: </p>
                <textarea
                    className="changeAmountDescription"
                    type="text"
                    onChange={(e) => props.setChangeGrantAmount({ ...props.changeGrantAmount, description: e.target.value })}
                />
            </div>
            <div className="submitButton">
                <button key="submitButton" className="header-cta"><a onClick={submitChangeAmount}>Submit</a></button>
            </div>
        </div>

    );
}

export default ChangeGrantAmountCard;