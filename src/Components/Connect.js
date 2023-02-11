import React, { useState } from "react";

const ConnectButton = () => {
    const [walletAddress, setWalletAddress] = useState("");
    const [loading, setLoading] = useState(false);

    const handleConnect = async () => {
        try {
            if (window.ethereum) {
                setLoading(true);
                await window.ethereum.enable();
                const tempAddressString = window.ethereum.selectedAddress;
                const tempAddressFront = tempAddressString.slice(0, 5);
                const tempAddressBack = tempAddressString.slice(-5, -1);

                setWalletAddress("Wallet: " + tempAddressFront + "..." + tempAddressBack);
            }
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="hero">
            <div className="header-cta2">
                {loading ? (
                    <p>Loading...</p>
                ) : walletAddress ? (
                    <p>{walletAddress}</p>
                ) : (
                    <button className="header-cta3" onClick={handleConnect}>Connect</button>
                )}
            </div>
        </div>
    );
};

export default ConnectButton;