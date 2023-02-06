import "./NewGrantCard.css";

function NewGrantCard(newGrantProposal) {
    return (

        <div className="NewGrantGrid">
            <div className="NewGrantItem1 NewGrantItems">
                <p>Recipient: </p>
                <input 
                    className="newGrantRecipient"
                    type="text"
                    // defaultValue="Please enter proposed recipient..."
                    onChange={(e) => newGrantProposal.recipient(e.target.value)}
                />
            </div>
            <div className="NewGrantItem2 NewGrantItems">
                <p>Description: </p>
                <textarea
                    className="newGrantDescription"
                    type="text"
                    // defaultValue="Please enter the description/information about the new proposed recipient..."
                    onChange={(e) => newGrantProposal.description(e.target.value)}
                />
            </div>
            <div className="submitButton">
                <button key="submitButton" className="header-cta"><a onClick={null}>Submit</a></button>
            </div>
        </div>

    );
}

export default NewGrantCard;