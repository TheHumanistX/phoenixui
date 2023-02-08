import "./ExecutedCard.css";

function ExecutedCard(props) {
    return (

        <div className="ExecutedGrid">
            <div className="ExecutedItem1 ExecutedItems">
                <p>ID: {props.id}</p>
            </div>
            <div className="ExecutedItem2 ExecutedItems">
                <p>State: {props.status}</p>
            </div>
            <div className="ExecutedItem3 ExecutedItems">
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
            <div className="ExecutedItem4 ExecutedItems">
                <p>PROPOSAL INFO OR GRANT CHANGE AMOUNT</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris venenatis tortor sit amet enim rhoncus, a aliquet nibh rutrum. Suspendisse commodo sit amet ante sit amet tempus. Nunc placerat aliquet massa vel tincidunt. Donec molestie condimentum consectetur. Fusce mattis gravida scelerisque. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Maecenas efficitur dignissim pharetra. Maecenas congue, metus quis egestas mollis, orci ipsum malesuada massa, non iaculis felis ex at elit. Integer nec aliquet erat. Nam et erat sit amet leo facilisis tincidunt accumsan ut quam. Sed convallis sapien a lectus congue pretium. Donec viverra dui at ex maximus luctus.</p>
            </div>
        </div>

    );
}

export default ExecutedCard;