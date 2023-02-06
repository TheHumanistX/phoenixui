import "./PendingCard.css";

function PendingCard(props) {
    return (

        <div className="PendingGrid">
            <div className="PendingItem1 PendingItems"><p>ID: </p></div>
            <div className="PendingItem2 PendingItems"><p>State: </p></div>
            <div className="PendingItem3 PendingItems">
                <div className="VotingBegins"><p>Voting Begins: </p></div>
                <div className="votingEnds"><p>Voting Ends: </p></div>
                <div className="Quorum"><p>Quorum: </p></div>
            </div>
            <div className="PendingItem4 PendingItems">
                <p>PROPOSAL INFO OR GRANT CHANGE AMOUNT</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris venenatis tortor sit amet enim rhoncus, a aliquet nibh rutrum. Suspendisse commodo sit amet ante sit amet tempus. Nunc placerat aliquet massa vel tincidunt. Donec molestie condimentum consectetur. Fusce mattis gravida scelerisque. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Maecenas efficitur dignissim pharetra. Maecenas congue, metus quis egestas mollis, orci ipsum malesuada massa, non iaculis felis ex at elit. Integer nec aliquet erat. Nam et erat sit amet leo facilisis tincidunt accumsan ut quam. Sed convallis sapien a lectus congue pretium. Donec viverra dui at ex maximus luctus.</p>
            </div>
        </div>

    );
}

export default PendingCard;