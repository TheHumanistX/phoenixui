import "./ActiveCard.css";
import { useState } from "react";
import { ethers } from "ethers";

function ActiveCard(props) {
    const [addressHasVoted, setAddressHasVoted] = useState(false);

    // const hasVoted = async () => {
    //     const provider = new ethers.providers.Web3Provider(window.ethereum);
    //     const signer = provider.getSigner();
    //     const contract = new ethers.Contract("CONTRACT ADDRESS", ABI, signer);
    //     const currentAddress = signer.getAddress();

    //     const voteBoolReturn = contract.memberHasVote(currentAddress, props.id);
    //     setAddressHasVoted(prevAddressHasVoted => voteBoolReturn);
    // }

    return (

        <div className="ActiveGrid">
            <div className="ActiveItem1 ActiveItems">
                <p>ID: {props.id}</p>
            </div>
            <div className="ActiveItem2 ActiveItems">
                <p>State: Active</p>
            </div>
            <div className="ActiveItem3 ActiveItems">
                <div className="ActiveFor">
                    <p>For: {props.votesFor}</p>
                </div>
                <div className="ActiveAgainst">
                    <p>Against: {props.votesAgainst}</p>
                </div>
                <div className="ActiveMembersVoted">
                    <p>Members Voted: {props.memberVoteCount}</p>
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
                        <p>{props.description}</p>
                    </div>
                }
            </div>
            <div className="ActiveItem5 ActiveItems">
                {addressHasVoted === true ?
                    <p>
                        YOU HAVE VOTED
                    </p>
                    :
                    <p>
                        {console.log("Active For Vote PropID: " + props.id)}
                        <a onClick={() => props.castVoteFor(props.id)} href="#">Vote For</a>
                    </p>
                }
            </div>
            <div className="ActiveItem6 ActiveItems">
                {addressHasVoted === true ?
                    <p>
                        YOU HAVE VOTED
                    </p>
                    :
                    <p>
                        <a onClick={() => props.castVoteFor(props.id)} href="#">Vote Against</a>
                    </p>
                }
            </div>
        </div>

    );
}

export default ActiveCard;