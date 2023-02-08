import "./PendingCard.css";

function PendingCard(props) {
    return (

        <div className="PendingGrid">
            <div className="PendingItem1 PendingItems">
                <p>ID: {props.id}</p>
            </div>
            <div className="PendingItem2 PendingItems">
                <p>State: Pending</p>
            </div>
            <div className="PendingItem3 PendingItems">
                <div className="VotingBegins">
                    <p>Voting Begins: </p>
                    <p>{props.voteBegins}</p>
                </div>
                <div className="votingEnds">
                    <p>Voting Ends: </p>
                    <p>{props.voteEnds}</p>
                </div>
                <div className="Quorum">
                    <p>Quorum: {props.quorum}</p>
                </div>
            </div>
            <div className="PendingItem4 PendingItems">
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
        </div>

    );
}

export default PendingCard;