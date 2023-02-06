import "./FailedCard.css";

function FailedCard(props) {
    return (

        <div className="FailedGrid">
            <div className="FailedItem1 FailedItems"><p>ID: </p></div>
            <div className="FailedItem2 FailedItems"><p>State: </p></div>
            <div className="FailedItem3 FailedItems">
                <div className="For"><p>For: </p></div>
                <div className="Against"><p>Against: </p></div>
                <div className="VoteEnded"><p>Voting Ended: </p></div>
            </div>
            <div className="FailedItem4 FailedItems">
                <p>PROPOSAL INFO OR GRANT CHANGE AMOUNT</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris venenatis tortor sit amet enim rhoncus, a aliquet nibh rutrum. Suspendisse commodo sit amet ante sit amet tempus. Nunc placerat aliquet massa vel tincidunt. Donec molestie condimentum consectetur. Fusce mattis gravida scelerisque. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Maecenas efficitur dignissim pharetra. Maecenas congue, metus quis egestas mollis, orci ipsum malesuada massa, non iaculis felis ex at elit. Integer nec aliquet erat. Nam et erat sit amet leo facilisis tincidunt accumsan ut quam. Sed convallis sapien a lectus congue pretium. Donec viverra dui at ex maximus luctus.</p>
            </div>
        </div>

    );
}

export default FailedCard;