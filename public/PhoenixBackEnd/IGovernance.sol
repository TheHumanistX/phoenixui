// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

interface IGovernor {
    enum ProposalState {
        Unassigned, // 0 -- On-chain default
        Pending, // 1 -- Returned dynamically by state()
        Active, // 2 -- Returned dynamically by state()
        Queued, // 3 -- Returned dynamically by state()
        Defeated, // 4 -- Assigned on-chain by execute()
        Succeeded, // 5 -- Assigned on-chain by execute()
        Expired // 6 -- Assigned on-chain by execute()
    }

    enum ProposalType {
        IssueGrant,
        ModifyGrantSize
    }

    struct ProposalData {
        uint256 voteBegins; // Timestamp when Vote stage begins
        uint256 voteEnds; // Timestamp when Vote stage ends
        uint256 votesFor; // Number of votes for this Proposal
        uint256 votesAgainst; // Number of votes against this Proposal
        ProposalState propState; // Store on-chain state of this Proposal
        ProposalType propType; // Proposal type -- Determines Execution stage's function call
        address recipient; // Recipient of ETH grant for IssueGrant
        uint256 ethGrant; // Amount of ETH grant for IssueGrant
        uint256 newETHGrant; // New ETH grant amount for ModifyGrantSize
    }

    //*** CORE FUNCTIONS ***\\
    // Returns the current state of a Proposal -- getProposal uses state to determine Proposal state
    function state(uint256 propID) external view returns(ProposalState);

    // Submits new grant recipient Proposal
    function submitNewGrant(address recipient, string memory description) external;

    // Submits new Proposal to change grant amount
    function submitNewAmountChange(uint256 newGrantAmount, string memory description) external;

    // Submits a vote for a Proposal
    function voteFor(uint256 propID) external;

    // Submits a vote against a Proposal
    function voteAgainst(uint256 propID) external;

    // Executes a Proposal that is in the Queued state
    function execute(uint256 propID) external;

    //*** GETTERS AND HELPERS ***\\
    // Use to begin array loop from most recent proposals first
    function getTotalProposals() external view returns(uint256 totalProposals);

    // This will return each Proposal with its dynamically calculated state
    function getProposal(uint256 propID) external view returns(ProposalData memory proposal);

    // Returns seconds left on Propose stage, may or may not be useful
    function getReviewTimeRemaining(uint256 propID) external view returns(uint256 timeRemaining);

    // Returns seconds left on Vote stage, may or may not be useful
    function getVoteTimeRemaining(uint256 propID) external view returns(uint256 timeRemaining);

    // Gets the quorum threshold
    function getQuorum() external view returns(uint256);
    
    // Gets the current grant amount
    function getGrantAmount() external view returns(uint256);

    // Gets the amount of ETH available for new proposals
    function availableETH() external view returns(uint256);

    // Gets the RPC node's timestamp
    function getTimestamp() external view returns(uint256 timestamp);
}