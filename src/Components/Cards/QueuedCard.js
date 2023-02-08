import "./QueuedCard.css";

function QueuedCard(props) {
    return (

        <div className="QueuedGrid">
            <div className="QueuedItem1 QueuedItems">
                <p>ID: {props.id}</p>
            </div>
            <div className="QueuedItem2 QueuedItems">
                <p>State: Queued</p>
            </div>
            <div className="QueuedItem3 QueuedItems">
                <div className="for">
                    <p>For: {props.votesFor}</p>
                </div>
                <div className="against">
                    <p>Against: {props.votesAgainst}</p>
                </div>
                <div className="votingEnds">
                    <p>Vote Ended: </p>
                    <p>{props.voteEnds}</p>
                </div>
            </div>
            <div className="QueuedItem4 QueuedItems">
                {props.propType == "IssueGrant" &&
                    <div>
                        <p>Proposal Type: </p>
                        <p>Issue New Grant</p>
                    </div>

                }
                {props.propType == "ModifyGrantSize" &&
                    <div>
                        <p>Proposal Type: </p>
                        <p>Modify Grant Amount</p>
                    </div>

                }
                <br />
                {props.propType == "IssueGrant" &&
                    <div>
                        <p>Recipient: </p>
                        <p>{props.recipient}</p>
                        <br />
                        <p>Description: </p>
                        <p>{props.description}</p>
                    </div>
                }
                {props.propType == "ModifyGrantSize" &&
                    <div>
                        <p>New Amount: </p>
                        <p>{props.newETHGrant}</p>
                        <br />
                        <p>Description: </p>
                        <p>{props.description}</p>
                    </div>
                }
            </div>
            <div className="QueuedItem5 QueuedItems">
                <p>
                    <a onClick={() => props.executeProposal(props.id)} href="#">Execute</a>
                </p>
            </div>
        </div>

    );
}

export default QueuedCard;