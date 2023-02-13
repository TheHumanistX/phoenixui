import React from "react";
import { ethers } from "ethers";
import { useEffect, useState } from "react";
import moment from "moment";
import ActiveCard from "./Cards/ActiveCard.js";
import QueuedCard from "./Cards/QueuedCard.js";
import PendingCard from "./Cards/PendingCard.js";
import SDECard from "./Cards/SDECard.js";
import ModifyGrantSizeCard from "./Cards/ModifyGrantSizeCard.js";
import NewGrantCard from "./Cards/NewGrantCard.js";
import ABI from "./GovernanceABI.json";
import "./Homepage.css";




function Homepage(props) {

    const [newGrantRecipient, setNewGrantRecipient] = useState("")
    const [newGrantDescription, setNewGrantDescription] = useState("");
    const [modifyGrantSizeAmount, setModifyGrantSizeAmount] = useState("");
    const [modifyGrantSizeDescription, setModifyGrantSizeDescription] = useState("");
    const [allCards, setAllCards] = useState([]);
    const [pagination, setPagination] = useState(0);
    const [submission, setSubmission] = useState(0);
    const [noMoreCards, setNoMoreCards] = useState(false);
    const [ActiveVote, setActiveVote] = useState(null);
    const [ActiveProposalId, setActiveProposalId] = useState(null);
    const [activateToggle, setActivateToggle] = useState(true);
    const [quorum, setQuorum] = useState(0);
    const [availableETH, setAvailableETH] = useState(0);

    // Below are any temp state or other variables for pre-contract testing




    // const [fakeCardsArray, setFakeCardsArray] = useState([
    //     {
    //         id: 1,
    //         voteBegins: "October 29, 2022",
    //         voteEnds: "December 29, 2022",
    //         votesFor: 277,
    //         votesAgainst: 73,
    //         propState: "ProposalState.Succeeded",
    //         propType: "ModifyGrantSize",
    //         recipient: "",
    //         ethGrant: "0.5 ETH",
    //         newETHGrant: "1 ETH",
    //         memberVoteCount: 4,
    //         description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris venenatis tortor sit amet enim rhoncus, a aliquet nibh rutrum."
    //     },
    //     {
    //         id: 2,
    //         propState: "ProposalState.Succeeded",
    //         propType: "IssueGrant",
    //         recipient: "Bill and Melinda Gates Foundation",
    //         ethGrant: "1 ETH",
    //         voteBegins: "November 17, 2023",
    //         voteEnds: "January 17, 2023",
    //         newETHGrant: "",
    //         votesFor: 310,
    //         votesAgainst: 12,
    //         memberVoteCount: 4,
    //         description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris venenatis tortor sit amet enim rhoncus, a aliquet nibh rutrum."
    //     },
    //     {
    //         id: 3,
    //         propState: "ProposalState.Defeated",
    //         propType: "ModifyGrantSize",
    //         recipient: "",
    //         ethGrant: "1 ETH",
    //         voteBegins: "November 28, 2022",
    //         voteEnds: "January 28, 2023",
    //         newETHGrant: "4 ETH",
    //         votesFor: 89,
    //         votesAgainst: 211,
    //         memberVoteCount: 4,
    //         description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris venenatis tortor sit amet enim rhoncus, a aliquet nibh rutrum."
    //     },
    //     {
    //         id: 4,
    //         propState: "ProposalState.Expired",
    //         propType: "IssueGrant",
    //         recipient: "The Web3 Foundation",
    //         ethGrant: "1 ETH",
    //         voteBegins: "November 30, 2022",
    //         voteEnds: "January 30, 2023",
    //         newETHGrant: "",
    //         votesFor: 306,
    //         votesAgainst: 44,
    //         memberVoteCount: 4,
    //         description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris venenatis tortor sit amet enim rhoncus, a aliquet nibh rutrum."
    //     },
    //     {
    //         id: 5,
    //         propState: "ProposalState.Active",
    //         propType: "IssueGrant",
    //         recipient: "ETH Charity Protocol",
    //         ethGrant: "1 ETH",
    //         voteBegins: "",
    //         voteEnds: "March 15, 2023",
    //         newETHGrant: "",
    //         votesFor: 223,
    //         votesAgainst: 25,
    //         memberVoteCount: 4,
    //         description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris venenatis tortor sit amet enim rhoncus, a aliquet nibh rutrum."
    //     },
    //     {
    //         id: 6,
    //         propState: "ProposalState.Defeated",
    //         propType: "ModifyGrantSize",
    //         recipient: "",
    //         ethGrant: "1 ETH",
    //         voteBegins: "February 17, 2023",
    //         voteEnds: "April 17, 2023",
    //         newETHGrant: "1.5 ETH",
    //         votesFor: 180,
    //         votesAgainst: 60,
    //         memberVoteCount: 4,
    //         description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris venenatis tortor sit amet enim rhoncus, a aliquet nibh rutrum."
    //     },
    //     {
    //         id: 7,
    //         propState: "ProposalState.Pending",
    //         propType: "ModifyGrantSize",
    //         recipient: "",
    //         ethGrant: "",
    //         voteBegins: "February 20, 2023",
    //         voteEnds: "April 20, 2023",
    //         newETHGrant: "2 ETH",
    //         votesFor: "",
    //         votesAgainst: "",
    //         memberVoteCount: 4,
    //         description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris venenatis tortor sit amet enim rhoncus, a aliquet nibh rutrum."
    //     },
    //     {
    //         id: 8,
    //         propState: "ProposalState.Active",
    //         propType: "IssueGrant",
    //         recipient: "Jon Doe Society",
    //         ethGrant: "1 ETH",
    //         voteBegins: "",
    //         voteEnds: "April 25, 2023",
    //         newETHGrant: "",
    //         votesFor: 265,
    //         votesAgainst: 45,
    //         memberVoteCount: 4,
    //         description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris venenatis tortor sit amet enim rhoncus, a aliquet nibh rutrum."
    //     },
    //     {
    //         id: 9,
    //         propState: "ProposalState.Queued",
    //         propType: "IssueGrant",
    //         recipient: "Bill and Melinda Gates Foundation",
    //         ethGrant: "1 ETH",
    //         voteBegins: "November 17, 2023",
    //         voteEnds: "January 17, 2023",
    //         newETHGrant: "",
    //         votesFor: 310,
    //         votesAgainst: 12,
    //         memberVoteCount: 4,
    //         description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris venenatis tortor sit amet enim rhoncus, a aliquet nibh rutrum."
    //     }

    // ]);

    // End temp state or other variables


    const timeConversion = (timeStampInt) => {

        const timeStampNew = new Date(timeStampInt * 1000);
        return moment(timeStampNew).format('MM-DD-YY, HH:mm:ss');
    }

    // Will be used to send new Grant Proposal
    const sendNewGrant = async () => {
        // const provider = new ethers.providers.Web3Provider(window.ethereum);
        // const signer = provider.getSigner();
        // const contract = new ethers.Contract("0xB1d55619Daf08EA2189d1af0b3Cb9C3284EfBb6f", ABI, signer);


        console.log("New Grant Recipient: " + newGrantRecipient);
        console.log("New Grant Description: " + newGrantDescription);
        // const tryToSendNewGrant = await contract.submitNewGrant(newGrantRecipient, newGrantDescription);

    }

    //Will be used to send new Grant Amoun Change Proposal
    const sendAmountChange = async () => {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        const contract = new ethers.Contract("0xB1d55619Daf08EA2189d1af0b3Cb9C3284EfBb6f", ABI, signer);
        console.log("New Proposed Amount: " + modifyGrantSizeAmount);
        console.log("New Amount Description: " + modifyGrantSizeDescription);

        const tryToSendAmountChange = await contract.submitNewAmountChange(modifyGrantSizeAmount, modifyGrantSizeDescription);
    }

    // Used to retrieve all of the proposals from the smart contract and display them in the dApp
    const getCards = async () => {

        const provider = new ethers.providers.Web3Provider(window.ethereum);
        await provider.send("eth_requestAccounts");
        const signer = provider.getSigner();
        const contract = new ethers.Contract("0xB1d55619Daf08EA2189d1af0b3Cb9C3284EfBb6f", ABI, signer);

        const totalCards = await contract.getTotalProposals();
        // const totalCards = fakeCardsArray.length;
        const displayPerPage = 3;
        const tempAvailableETH = await contract.availableETH();
        const formattedAvailableEth = ethers.utils.formatEther(tempAvailableETH);
        setAvailableETH(formattedAvailableEth);

        setNoMoreCards(totalCards == ((pagination + 1) * displayPerPage) ? true : Math.floor(totalCards / ((pagination + 1) * displayPerPage)) <= 0 ? true : false);


        const starting = totalCards - (displayPerPage * pagination) - 1;
        console.log("starting: " + starting);
        getQuorum();
        setAllCards([]);
        console.log("Entering for() loop: ...")
        const tempVar = starting - displayPerPage;
        for (var i = starting; i > starting - displayPerPage && i >= 0; i--) {
            const propId = i;
            // const currentCard = fakeCardsArray[i];
            const currentCard = await contract.getProposal(i);
            logProposal(currentCard, propId);
            for (var j = 0; j < currentCard.length; j++) {
                if (j == 0 || j == 1 || j == 2 || j == 3 || j == 4 || j == 8 || j == 9) {
                    console.log("Index: " + j + ": " + currentCard[j].toNumber());
                    //currentCardTempArray[i] = currentCard[i].toNumber();
                } else {
                    console.log("Index: " + j + ": " + currentCard[j]);
                    //currentCardTempArray[i] = currentCard[i];
                }
            }
            setAllCards(prevAllCards => [...prevAllCards, formatProposal(currentCard, propId)]);



        }


    }

    const logProposal = (proposal, proposalId) => {
        console.log(
            "propId: " + proposalId + "\n",
            "voteBegins: " + timeConversion(proposal[0].toNumber()) + "\n",
            "voteEnds: " + timeConversion(proposal[1].toNumber()) + "\n",
            "votesFor: " + proposal[2].toNumber() + "\n",
            "votesAgainst: " + proposal[3].toNumber() + "\n",
            "memberVoteCount: " + proposal[4].toNumber() + "\n",
            "propState: " + returnPropState(proposal[5]) + "\n",
            "propType: " + returnPropType(proposal[6]) + "\n",
            "recipient: " + proposal[7] + "\n",
            "ethGrant: " + ethers.utils.formatEther(proposal[8].toNumber()) + "\n",
            "newETHGrant: " + ethers.utils.formatEther(proposal[9].toNumber()) + "\n",
            "description: " + proposal[10]
        )
    }

    const formatProposal = (proposal, proposalId) => {

        return ({
            propId: proposalId,
            voteBegins: timeConversion(proposal[0].toNumber()),
            voteEnds: timeConversion(proposal[1].toNumber()),
            votesFor: proposal[2].toNumber(),
            votesAgainst: proposal[3].toNumber(),
            memberVoteCount: proposal[4].toNumber(),
            propState: returnPropState(proposal[5]),
            propType: returnPropType(proposal[6]),
            recipient: proposal[7],
            ethGrant: ethers.utils.formatEther(proposal[8].toNumber()),
            newETHGrant: ethers.utils.formatEther(proposal[9].toNumber()) + "\n",
            description: proposal[10]
        })
    }

    const returnPropState = (propState) => {
        propState = propState == 0 ? "Unassigned"
            : propState == 1 ? "Pending"
                : propState == 2 ? "Active"
                    : propState == 3 ? "Queued"
                        : propState == 4 ? "Defeated"
                            : propState == 5 ? "Succeeded"
                                : propState == 6 ? "Expired"
                                    : "Uknown";
        return propState;
    }

    const returnPropType = (propType) => {
        propType = propType == 0 ? "IssueGrant"
            : propType == 1 ? "ModifyGrantSize"
                : "Unknown";
        return propType;
    }

    // Casts For vote 
    const castVoteFor = async (proposalId) => {


        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        const contract = new ethers.Contract("0xB1d55619Daf08EA2189d1af0b3Cb9C3284EfBb6f", ABI, signer);
        contract.voteFor(proposalId);
    }

    // Casts Against Vote
    const castVoteAgainst = async (proposalId) => {


        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        const contract = new ethers.Contract("0xB1d55619Daf08EA2189d1af0b3Cb9C3284EfBb6f", ABI, signer);
        contract.voteAgainst(proposalId);


    }

    // Executes a proposal
    const executeProposal = async (proposalId) => {
        console.log("Executing Proposal " + proposalId + "!");
        // fakeCardsArray[proposalId].propState = "Expired";
        // getCards();
        // const provider = new ethers.providers.Web3Provider(window.ethereum);
        // await provider.send("eth_requestAccounts");
        // const signer = provider.getSigner();
        // const contract = new ethers.Contract("0xB1d55619Daf08EA2189d1af0b3Cb9C3284EfBb6f", ABI, signer);
        // contract.execute(proposalId);
    }

    const getQuorum = async () => {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        const contract = new ethers.Contract("0xB1d55619Daf08EA2189d1af0b3Cb9C3284EfBb6f", ABI, signer);
        const fetchedQuorum = await contract.getQuorum();

        setQuorum(prevQuorum => fetchedQuorum.toNumber());
        console.log("Quorum: " + quorum);
    }

    useEffect(() => {
        getCards();

    }, [pagination]);


    return (
        <div>

            <section>
                <div className="hero">
                    {/* 
                    Buttons to navigate to older and newer proposals
                    Coding in each stops the button from going past the last or first proposal
                     */}
                    <button key="Back-Button" className="header-cta"><a onClick={() => noMoreCards ? null : setPagination((old) => old + 1)} href="#" >Older</a></button>
                    Available DAO Funds: {availableETH} ETH
                    <button key="Forward-Button" className="header-cta"><a onClick={() => pagination > 0 ? setPagination((old) => old - 1) : null} href="#" >Newer</a></button>
                    <div className="cardPresentation">

                        {/* Begin mapping allCards to display cards on dApp */}
                        {allCards.map((item) => {
                            // Setting cardType for ternary to follow
                            const cardType =
                                item.propState == "Active" ? "Active"
                                    : item.propState == "Pending" ? "Pending"
                                        : item.propState == "Succeeded" ? "Succeeded"
                                            : item.propState == "Defeated" ? "Defeated"
                                                : item.propState == "Expired" ? "Expired"
                                                    : "Queued";
                            { console.log("AllCards Map propId: " + item.propId) }
                            // return() for the .map function
                            return (
                                // Calls ActiveCard component for active proposals
                                cardType == "Active" ?
                                    <ActiveCard key={item.propId}
                                        id={item.propId}
                                        propState={item.propState}
                                        recipient={item.recipient}
                                        propType={item.propType}
                                        votesFor={item.votesFor}
                                        votesAgainst={item.votesAgainst}
                                        quorum={quorum}
                                        voteEnds={item.voteEnds}
                                        ethGrant={item.ethGrant}
                                        newETHGrant={item.newETHGrant}
                                        castVoteFor={castVoteFor}
                                        castVoteAgainst={castVoteAgainst}
                                        description={item.description}
                                        memberVoteCount={item.memberVoteCount}
                                    />
                                    :
                                    // Calls PendingCard component for pending proposals
                                    cardType == "Pending" ?
                                        <PendingCard key={item.propId}
                                            id={item.propId}
                                            propState={item.propState}
                                            propType={item.propType}
                                            recipient={item.recipient}
                                            voteBegins={item.voteBegins}
                                            voteEnds={item.voteEnds}
                                            ethGrant={item.ethGrant}
                                            newETHGrant={item.newETHGrant}
                                            quorum={quorum}
                                            description={item.description}
                                        />
                                        :
                                        // Calls QueuedCard component for queued proposals
                                        cardType == "Queued" ?
                                            <QueuedCard key={item.propId}
                                                id={item.propId}
                                                propState={item.propState}
                                                propType={item.propType}
                                                recipient={item.recipient}
                                                votesFor={item.votesFor}
                                                votesAgainst={item.votesAgainst}
                                                voteEnds={item.voteEnds}
                                                ethGrant={item.ethGrant}
                                                newETHGrant={item.newETHGrant}
                                                description={item.description}
                                                executeProposal={executeProposal}
                                            />
                                            :
                                            // Calls SDECard (SuccessfulDefeatedExpired) component for defeated proposals
                                            cardType == "Defeated" ?
                                                <SDECard key={item.propId}
                                                    id={item.propId}
                                                    propState={item.propState}
                                                    propType={item.propType}
                                                    recipient={item.recipient}
                                                    votesFor={item.votesFor}
                                                    votesAgainst={item.votesAgainst}
                                                    voteEnds={item.voteEnds}
                                                    ethGrant={item.ethGrant}
                                                    newETHGrant={item.newETHGrant}
                                                    description={item.description}
                                                    memberVoteCount={item.memberVoteCount}
                                                />
                                                :
                                                // Calls SDECard (SuccessfulDefeatedExpired) component for expired proposals
                                                cardType == "expired" ?
                                                    <SDECard key={item.propId}
                                                        id={item.propId}
                                                        propState={item.propState}
                                                        propType={item.propType}
                                                        recipient={item.recipient}
                                                        votesFor={item.votesFor}
                                                        votesAgainst={item.votesAgainst}
                                                        voteEnds={item.voteEnds}
                                                        ethGrant={item.ethGrant}
                                                        newETHGrant={item.newETHGrant}
                                                        description={item.description}
                                                        memberVoteCount={item.memberVoteCount}
                                                    />
                                                    :
                                                    // Calls SDECard (SuccessfulDefeatedExpired) component for successful proposals
                                                    <SDECard key={item.propId}
                                                        id={item.propId}
                                                        propState={item.propState}
                                                        propType={item.propType}
                                                        recipient={item.recipient}
                                                        votesFor={item.votesFor}
                                                        votesAgainst={item.votesAgainst}
                                                        voteEnds={item.voteEnds}
                                                        ethGrant={item.ethGrant}
                                                        newETHGrant={item.newETHGrant}
                                                        description={item.description}
                                                        memberVoteCount={item.memberVoteCount}
                                                    />
                            )
                        })}

                    </div>

                    <div className="Send">
                        <hr />
                        <br />
                        {/* Begin section for proposing new grant recipients or new grant amounts */}
                        <p>Propose new grant recipients or changes to future grant amounts below:</p>
                        {/* Dropdown selection menu for choice of either proposal type */}
                        <select value={submission} key="submissionSelection" onChange={(e) => setSubmission(e.target.value)} name="submissionId" id="submissionId">
                            <option key="SelectOption">Select Option...</option>
                            <option key="newGrant" value="newGrant">Propose New Grant Recipient</option>
                            <option key="ModifyGrantSize" value="ModifyGrantSize">Propose Changing Future Grant Amounts</option>

                        </select>

                        <div className="newSubmissions">
                            {submission == "newGrant" ?
                                //show newGrant card
                                <NewGrantCard
                                    setNewGrantRecipient={setNewGrantRecipient}
                                    setNewGrantDescription={setNewGrantDescription}
                                    sendNewGrant={sendNewGrant}
                                />
                                :
                                submission == "ModifyGrantSize" ?
                                    //show ModifyGrantSize card 
                                    <ModifyGrantSizeCard
                                        setModifyGrantSizeAmount={setModifyGrantSizeAmount}
                                        setModifyGrantSizeDescription={setModifyGrantSizeDescription}
                                        sendAmountChange={sendAmountChange}
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