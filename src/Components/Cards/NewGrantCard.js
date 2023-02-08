import "./NewGrantCard.css";

function NewGrantCard(props) {
    return (

        <div className="NewGrantGrid">
            <div className="NewGrantItem1 NewGrantItems">
                <p>Recipient: </p>
                <input
                    className="newGrantRecipient"
                    type="text"
                    value={props.newGrant.recipient}
                    // defaultValue="Please enter proposed recipient..."
                    onChange={(e) => props.setNewGrantRecipient(e.target.value)}
                />
            </div>
            <div className="NewGrantItem2 NewGrantItems">
                <p>Description: </p>
                <textarea
                    className="newGrantDescription"
                    type="text"
                    // defaultValue="Please enter the description/information about the new proposed recipient..."
                    onChange={(e) => props.setNewGrantDescription(e.target.value)}
                />
            </div>
            <div className="submitButton">
                <button key="submitButton" className="header-cta"><a onClick={props.sendNewGrant}>Submit</a></button>
            </div>
        </div>

    );
}

export default NewGrantCard;