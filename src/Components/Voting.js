function Voting (props) {

    {props.activeVote == 0 ?
        props.voteAgainst += 1
        :
        props.voteFor += 1

    }
}

export default Voting;