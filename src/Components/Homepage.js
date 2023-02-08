import React from "react";
import { ethers } from "ethers";
import { useEffect, useState } from "react";
import moment from "moment";
import ActiveCard from "./Cards/ActiveCard.js";
import SucceededCard from "./Cards/SucceededCard.js";
import PendingCard from "./Cards/PendingCard.js";
import FailedCard from "./Cards/FailedCard.js";
import ExecutedCard from "./Cards/ExecutedCard.js";
import ChangeGrantAmountCard from "./Cards/ChangeGrantAmountCard.js";
import NewGrantCard from "./Cards/NewGrantCard.js";
import Vote from "./Voting.js";
import "./Homepage.css";




function Homepage(props) {

    const [newGrant, setNewGrant] = useState({ recipient: "", description: "" })
    const [changeGrantAmount, setChangeGrantAmount] = useState({ amount: "", description: "" });
    const [allCards, setAllCards] = useState([]);
    const [pagination, setPagination] = useState(0);
    const [submission, setSubmission] = useState(0);
    const [noMoreCards, setNoMoreCards] = useState(false);
    const [activeVote, setActiveVote] = useState(null);
    const [activeProposalId, setActiveProposalId] = useState(null);
    const [activateToggle, setActivateToggle] = useState(true);

    // Below are any temp state or other variables for pre-contract testing

    
    
    
    const [fakeCardsArray, setFakeCardsArray] = useState([
        {
            id: 1,
            status: "succeeded",
            proposalType: "ChangeGrantAmount",
            recipient:"",
            grantAmount:"0.5 ETH",
            voteBegins:"October 29, 2022",
            voteEnds: "December 29, 2022",
            newGrantAmount: "1 ETH",
            votesFor: 277,
            votesAgainst: 73,
            quorum: 250
        },
        {
            id: 2,
            status: "succeeded",
            proposalType: "IssueETHGrant",
            recipient: "Bill and Melinda Gates Foundation",
            grantAmount: "1 ETH",
            voteBegins:"November 17, 2023",
            voteEnds: "January 17, 2023",
            newGrantAmount:"",
            votesFor: 310,
            votesAgainst: 12,
            quorum: 250
        },
        {
            id: 3,
            status: "failed",
            proposalType: "ChangeGrantAmount",
            recipient:"",
            grantAmount:"1 ETH",
            voteBegins:"November 28, 2022",
            voteEnds: "January 28, 2023",
            newGrantAmount: "4 ETH",
            votesFor: 89,
            votesAgainst: 211,
            quorum: 250
        },
        {
            id: 4,
            status: "executed",
            proposalType: "IssueETHGrant",
            recipient: "The Web3 Foundation",
            grantAmount: "1 ETH",
            voteBegins:"November 30, 2022",
            voteEnds: "January 30, 2023",
            newGrantAmount:"",
            votesFor: 306,
            votesAgainst: 44,
            quorum: 250
        },
        {
            id: 5,
            status: "active",
            proposalType: "IssueETHGrant",
            recipient: "ETH Charity Protocol",
            grantAmount: "1 ETH",
            voteBegins:"",
            voteEnds: "March 15, 2023",
            newGrantAmount:"",
            votesFor: 223,
            votesAgainst: 25,
            quorum: 250
        },
        {
            id: 6,
            status: "failed",
            proposalType: "ChangeGrantAmount",
            recipient:"",
            grantAmount:"1 ETH",
            voteBegins: "February 17, 2023",
            voteEnds: "April 17, 2023",
            newGrantAmount: "1.5 ETH",
            votesFor:180,
            votesAgainst:60,
            quorum: 250
        },
        {
            id: 7,
            status: "pending",
            proposalType: "ChangeGrantAmount",
            recipient:"",
            grantAmount:"",
            voteBegins: "February 20, 2023",
            voteEnds: "April 20, 2023",
            newGrantAmount: "2 ETH",
            votesFor:"",
            votesAgainst:"",
            quorum:250
        },
        {
            id: 8,
            status: "active",
            proposalType: "IssueETHGrant",
            recipient: "Jon Doe Society",
            grantAmount: "1 ETH",
            voteBegins:"",
            voteEnds: "April 25, 2023",
            newGrantAmount:"",
            votesFor: 265,
            votesAgainst: 45,
            quorum: 310
        }
              
    ]);
    
    // End temp state or other variables


    const timeConversion = (timeStampBigNumber) => {
        const timeStampInt = timeStampBigNumber.toNumber();
        const timeStampNew = new Date(timeStampInt * 1000);
        return moment(timeStampNew).format('MM-DD-YY, HH:mm:ss a');
    }

    const sendNewGrant = async () => {
        // const provider = new ethers.providers.Web3Provider(window.ethereum);
        // const signer = provider.getSigner();
        // const contract = new ethers.Contract("Contract Address", ABI, signer);


        console.log("New Grant Recipient: " + newGrant.recipient);
        console.log("New Grant Description: " + newGrant.description);
        // const tryToSendNewGrant = await contract.addNewGrant(newGrant);

    }

    const sendAmountChange = async () => {
        // const provider = new ethers.providers.Web3Provider(window.ethereum);
        // const signer = provider.getSigner();
        // const contract = new ethers.Contract("Contract Address", ABI, signer);
        console.log("New Proposed Amount: " + changeGrantAmount.amount);
        console.log("New Amount Description: " + changeGrantAmount.description);

        // const tryToSendAmountChange = await contract.addNewAmountChange(changeGrantAmount);
    }

    const getCards = async () => {

        // const provider = new etheres.providers.Web3Provider(window.ethereum);
        // await provider.send("eth_requestAccounts");
        // const signer = provider.getSigner();
        // const contract = new ethers.Contract("CONTRACT ADDRESS", ABI, signer);

        const totalCards = fakeCardsArray.length;
        console.log("fakeCardsArray Length: " + totalCards);
        const displayPerPage = 3;
        
        setNoMoreCards(Math.floor(totalCards / ((pagination + 1) * displayPerPage)) <= 0 ? true : false);
        
        
        const starting = totalCards - (displayPerPage * pagination) - 1;
        console.log("starting: " + starting);

        setAllCards([]);
        console.log("Entering for() loop: ...")
        for (var i = starting; i > starting - displayPerPage && i >= 0; i--) {
            
                const currentCard = fakeCardsArray[i];
                console.log("Current Whole Card Object: " + JSON.stringify(currentCard));
                console.log("Current Card i = " + i + ": " + currentCard.status);
                setAllCards(prevAllCards => [...prevAllCards, currentCard]);
                console.log("allCards.length: " + allCards.length);
                
            
        }


    }

    const castVoteFor = async (proposalId) => {
       console.log("Voted for Proposal " + proposalId +"!");
       fakeCardsArray[proposalId - 1].votesFor += 1;
       console.log("Votes For: " + fakeCardsArray[proposalId - 1].votesFor)
       getCards();
    }

    const castVoteAgainst = async (proposalId) => {
        console.log("Voted against Proposal " + proposalId +"!");
        fakeCardsArray[proposalId - 1].votesAgainst += 1;
        console.log("Votes against: " + fakeCardsArray[proposalId - 1].votesAgainst);
        getCards();
        
    }

    const executeProposal = async (proposalId) => {
        console.log("Executing Proposal " + proposalId +"!");
        fakeCardsArray[proposalId - 1].status = "executed";
        getCards();
    }

    const newProposalToPending = async () => {
        console.log("New Proposal ID " + (fakeCardsArray.length + 1) + " to be added to Pending...");

        const newId = fakeCardsArray.length + 1;
        const newProposal = {
            id: newId,
            status: "pending",
            proposalType: "ChangeGrantAmount",
            recipient:"",
            grantAmount:"",
            voteBegins: "February 28, 2023",
            voteEnds: "April 28, 2023",
            newGrantAmount: changeGrantAmount.amount,
            votesFor:"",
            votesAgainst:"",
            quorum:250
        }
        setFakeCardsArray([...fakeCardsArray, newProposal]);
        
        // console.log("New Array Object: " + fakeCardsArray[newId - 1]);
        console.log("Activate proposal called...");
        activateProposal(newId);
        
        
    }

    const activateProposal = async (proposalId) => {
        console.log("Setting Pending Proposal " + proposalId + " to Active in 20 seconds...");

        setTimeout(() => {
            
            fakeCardsArray[fakeCardsArray.length - 1].status = "active";
            // fakeCardsArray[fakeCardsArray.length - 1].status = "active";
            console.log("Proposal " + proposalId + " set to Active!");
            console.log("Toggle set to: " + activateToggle);
            console.log("Flipping toggle...");
            setActivateToggle(!activateToggle);
            console.log("Toggle flipped to: " + activateToggle);

            getCards();
            console.log("Checking if proposal status is Active: " + fakeCardsArray[fakeCardsArray.length - 1].status);


        }, 20000);
    }
    useEffect(() => {
        getCards();

    },[pagination]);

    useEffect(() => {
        console.log("New Array Object: " + JSON.stringify(fakeCardsArray[fakeCardsArray.length - 1]));
        console.log("New Array Length: " + fakeCardsArray.length);
    }, [fakeCardsArray])
    useEffect(() => {
        console.log("useEffect called from fakeCardsArray length change...");
        getCards();
    },[fakeCardsArray.length]);

    useEffect(() => {
        console.log("useEffect called from activateToggle change....");
        console.log("status of Item 9: " + fakeCardsArray[7].status);
        getCards();
    },[activateToggle]);

    return (
        <div>

            <section>
                <div className="hero">
                    <button key="Back-Button" className="header-cta"><a onClick={() => noMoreCards ? null : setPagination((old) => old + 1)} href="#" >Older</a></button>
                    <button key="Forward-Button" className="header-cta"><a onClick={() => pagination > 0 ? setPagination((old) => old - 1) : null} href="#" >Newer
                    </a></button>
                    <div className="cardPresentation">
                        
                        {/* 
                    
                        TEMP FUNCTION TO RETURN CARDS PRE-CONTRACT

                        */}

                        {allCards.map((item) => {
                            const cardType = 
                            item.status == "active" ?  "active" 
                            : item.status == "pending" ?  "pending"
                            : item.status == "succeeded" ? "succeeded"
                            : item.status == "failed" ? "failed"
                            : "executed";
                                
                            
                            return(
                                cardType == "active" ?
                                    <ActiveCard key={item.id} 
                                    id={item.id} 
                                    status={item.status} 
                                    votesFor={item.votesFor} 
                                    votesAgainst={item.votesAgainst}
                                    quorum={item.quorum}
                                    voteEnds={item.voteEnds}
                                    setActiveProposalId={setActiveProposalId}
                                    castVoteFor={castVoteFor}
                                    castVoteAgainst={castVoteAgainst}
                                    />
                                :
                                   cardType == "pending" ?
                                   <PendingCard key={item.id}
                                   id={item.id}
                                   status={item.status}
                                   voteBegins={item.voteBegins}
                                   voteEnds={item.voteEnds}
                                   quorum={item.quorum}
                                   />
                                   :
                                   cardType == "succeeded" ?
                                   <SucceededCard key={item.id}
                                   id={item.id}
                                   status={item.status}
                                   votesFor={item.votesFor}
                                   votesAgainst={item.votesAgainst}
                                   voteEnds={item.voteEnds}
                                   setActiveProposalId={item.setActiveProposalId}
                                   executeProposal={executeProposal}
                                   />
                                   :
                                   cardType == "failed" ?
                                   <FailedCard key={item.id}
                                   id={item.id}
                                   status={item.status}
                                   votesFor={item.votesFor}
                                   votesAgainst={item.votesAgainst}
                                   voteEnds={item.voteEnds}
                                   />
                                   :
                                   <ExecutedCard key={item.id}
                                   id={item.id}
                                   status={item.status}
                                   votesFor={item.votesFor}
                                   votesAgainst={item.votesAgainst}
                                   voteEnds={item.voteEnds}
                                   />

                            )
                        })}

                        {/* 
                    
                        END TEMP FUNCTION TO RETURN CARDS PRE-CONTRACT

                        */}

                    </div>

                    <div className="Send">
                        <hr />
                        <br />
                        <p>Propose new grant recipients or changes to future grant amounts below:</p>
                        <select value={submission} key="submissionSelection" onChange={(e) => setSubmission(e.target.value)} name="submissionId" id="submissionId">
                            <option key="SelectOption">Select Option...</option>
                            <option key="newGrant" value="newGrant">Propose New Grant Recipient</option>
                            <option key="changeGrantAmount" value="changeGrantAmount">Propose Changing Future Grant Amounts</option>

                        </select>

                        <div className="newSubmissions">
                            {submission == "newGrant" ?
                                //show newGrant card
                                <NewGrantCard 
                                setNewGrant={setNewGrant} 
                                newGrant={newGrant} 
                                sendNewGrant={sendNewGrant} 
                                activateProposal={activateProposal}
                                />
                                :
                                submission == "changeGrantAmount" ?
                                    //show changeGrantAmount card 
                                    <ChangeGrantAmountCard 
                                    setChangeGrantAmount={setChangeGrantAmount} 
                                    changeGrantAmount={changeGrantAmount} 
                                    sendAmountChange={sendAmountChange} 
                                    newProposalToPending={newProposalToPending}
                                    />
                                    :
                                    <p></p>
                                //show nothing
                            }
                            <br />
                            <br />
                            <br />
                        </div>
                    </div>
                </div>
            </section >
        </div >

    );
}

export default Homepage;