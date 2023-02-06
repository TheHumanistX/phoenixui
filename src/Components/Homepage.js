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
import "./Homepage.css";
import Mint from "./Mint.js";
import MintABI from "./MintABI.json";


function Homepage(props) {
    
    const [newGrant, setNewGrant] = useState({recipient:"", description:""})
    const [changeGrantAmount, setChangeGrantAmount] = useState({amount: "", description: ""});
    const [allChats, setAllChats] = useState([]);
    const [pagination, setPagination] = useState(0);
    const [submission, setSubmission] = useState(0);
    const [noMoreMessages, setNoMoreMessages] = useState(false);
    

    const timeConversion = (timeStampBigNumber) => {
        const timeStampInt = timeStampBigNumber.toNumber();
        const timeStampNew = new Date(timeStampInt * 1000);
        return moment(timeStampNew).format('MM-DD-YY, HH:mm:ss a');
    }
    const sendNewProposal = async () => {
        // const provider = new ethers.providers.Web3Provider(window.ethereum);
        // const signer = provider.getSigner();
        // const contract = new ethers.Contract("Contract Address", ABI, signer);
    }

    const getMessages = async () => {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        console.log("Provider: " + provider);
        await provider.send("eth_requestAccounts");
        const signer = provider.getSigner();
        console.log("Signer: " + signer);
        const contract = new ethers.Contract("0x35F7f83F7d153e9c4A2E9B07e1302D46E259b5AD", MintABI, signer);
        console.log("Contract: " + contract);

        const totalMessages = await contract.totalMessages();
        setNoMoreMessages(Math.floor(totalMessages / ((pagination + 1) * 10)) <= 0 ? true : false)
        const displayPerPage = 3;
        const starting = totalMessages - (displayPerPage * pagination) - 1;

        setAllChats([]);

        for (var i = starting; i > starting - displayPerPage; i--) {
            if (i >= 0) {
                const currentMessage = await contract.Messages(i);
                const currentMessageArray = [...currentMessage];
                currentMessageArray[4] = timeConversion(currentMessageArray[4]);
                setAllChats(prevChat => [...prevChat, currentMessageArray]);
            }
        }

    }

    useEffect(() => {
        getMessages();
    }, [pagination]);


    return (
        <div>

            <section>
                <div className="hero">
                    <button key="Back-Button" className="header-cta"><a onClick={() => noMoreMessages ? null : setPagination((old) => old + 1)} href="#" >Older</a></button>
                    <button key="Forward-Button" className="header-cta"><a onClick={() => pagination > 0 ? setPagination((old) => old - 1) : null} href="#" >Newer
                    </a></button>
                    <div className="chatMessage">
                        {allChats.map((item, index) => {
                            const date = item[4].toString();

                            return (
                                <ExecutedCard />

                            )
                        })}

                    </div>

                    <div className="Send">
                        <hr />
                        <br />
                        <p>Propose new grant recipients or changes to future grant amounts below:</p>
                        <select value={submission} key="submissionSelection" onChange={(e) => setSubmission(e.target.value)} name="submissionId" id="submissionId">
                                <option key="SelectOption">Select Option...</option>
                                <option key="newGrant" value="newGrant">Propose New Grant Recipient</option>
                                <option key="changeGrantAmount" value="changeGrantAmount">Propose Changing Future Grant Amounts</option>
                                {console.log("New Submission Type: " + submission)};
                        </select> 
                        
                        <div className="newSubmissions">
                            {submission == "newGrant" ? 
                                //show newGrant card
                                <NewGrantCard newGrantProposal={setNewGrant}/>
                                : 
                                submission == "changeGrantAmount" ? 
                                //show changeGrantAmount card 
                                <ChangeGrantAmountCard changeGrantAmount={setChangeGrantAmount}/>
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