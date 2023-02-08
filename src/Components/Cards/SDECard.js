import "./SDECard.css";

function SDECard(props) {
    return (

        <div className="SDEGrid">
            <div className="SDEItem1 SDEItems">
                <p>ID: {props.id}</p>
            </div>
            <div className="SDEItem2 SDEItems">
                <p>State: {
                    props.propState == "ProposalState.Succeeded"
                        ?
                        "Succeeded"
                        :
                        props.propState == "ProposalState.Defeated"
                            ?
                            "Defeated"
                            :
                            "Expired"
                }
                </p>
            </div>
            <div className="SDEItem3 SDEItems">
                <div className="For">
                    <p>For: {props.votesFor}</p>
                </div>
                <div className="Against">
                    <p>Against: {props.votesAgainst}</p>
                </div>
                <div className="VoteEnded">
                    <p>Voting Ended: </p>
                    <p>{props.voteEnds}</p>
                </div>
            </div>
            <div className="SDEItem4 SDEItems">
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

export default SDECard;