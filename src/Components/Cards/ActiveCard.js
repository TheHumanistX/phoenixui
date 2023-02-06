import "./ActiveCard.css";

function ActiveCard(props) {
    return (

        <div className="ActiveGrid">
            <div className="ActiveItem1 ActiveItems"><p>ID: </p></div>
            <div className="ActiveItem2 ActiveItems"><p>State: </p></div>
            <div className="ActiveItem3 ActiveItems">
                <div className="ActiveFor"><p>For: </p></div>
                <div className="ActiveAgainst"><p>Against: </p></div>
                <div className="ActiveQuorum"><p>Quorum: </p></div>
                <div className="ActiveVotingEnds"><p>Voting Ends:</p></div>
            </div>
            <div className="ActiveItem4 ActiveItems">
                <p>PROPOSAL INFO OR GRANT CHANGE AMOUNT</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris venenatis tortor sit amet enim rhoncus, a aliquet nibh rutrum. Suspendisse commodo sit amet ante sit amet tempus. Nunc placerat aliquet massa vel tincidunt. Donec molestie condimentum consectetur. Fusce mattis gravida scelerisque. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Maecenas efficitur dignissim pharetra. Maecenas congue, metus quis egestas mollis, orci ipsum malesuada massa, non iaculis felis ex at elit. Integer nec aliquet erat. Nam et erat sit amet leo facilisis tincidunt accumsan ut quam. Sed convallis sapien a lectus congue pretium. Donec viverra dui at ex maximus luctus.</p>
            </div>
            <div className="ActiveItem5 ActiveItems"><p>Vote For</p></div>
            <div className="ActiveItem6 ActiveItems"><p>Vote Against</p></div>
            {/* <div className="chatBubble">
                <p>{props.text}</p>
            </div>

            <div className="bubbleInfo">
                <div className="bubbleTimestamp">
                    <p>{props.data}</p>
                </div>
                <div className="bubbleSender">
                    <p>{props.sender}</p>
                </div>

            </div> */}
        </div>

    );
}

export default ActiveCard;