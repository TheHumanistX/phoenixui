import "./ActiveCard.css";

function ActiveCard(props) {

    
    return (

        <div className="ActiveGrid">
            <div className="ActiveItem1 ActiveItems">
                <p>ID: {props.id}</p>
            </div>
            <div className="ActiveItem2 ActiveItems">
                <p>State: {props.propState}</p>
            </div>
            <div className="ActiveItem3 ActiveItems">
                <div className="ActiveFor">
                    <p>For: {props.votesFor}</p>
                </div>
                <div className="ActiveAgainst">
                    <p>Against: {props.votesAgainst}</p>
                </div>
                <div className="ActiveQuorum">
                    <p>Quorum: {props.quorum}</p>
                </div>
                <div className="ActiveVotingEnds">
                    <p>Voting Ends: </p>
                    <p>{props.voteEnds}</p>
                </div>
            </div>
            <div className="ActiveItem4 ActiveItems">
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
                        <p>{props.description}></p>
                    </div>
                }
            </div>
            <div className="ActiveItem5 ActiveItems">
                <p>
                    <a onClick={() => props.castVoteFor(props.id)} href="#">Vote For</a>
                </p>
            </div>
            <div className="ActiveItem6 ActiveItems">
                <p>
                    <a onClick={() => props.castVoteFor(props.id)} href="#">Vote Against</a>
                </p>
            </div>
        </div>

    );
}

export default ActiveCard;