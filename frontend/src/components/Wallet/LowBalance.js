import { useContext } from "react";
import { walletContextObj } from "../../context/wallet/walletContext";
import { useNavigate } from "react-router-dom";

function LowBalance() {
    let navigate = useNavigate();
    const { walletData, updateWalletData, setLowBalance } = useContext(walletContextObj);

    function closeModal() {
        setLowBalance(false)
    }
    function topUp() {
        navigate('/top-up')
    }
    return (
        <div className="overlayModalBalance">
            <div className="positionBlurContent modal d-inline" role="dialog" >
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Low Balance</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={closeModal}>
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <p>Your Balance is low ({walletData.currency} {walletData.amount}.00). Please top-up.</p>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={closeModal}>Close</button>
                            <button type="button" className="btn btn-primary" onClick={topUp}>Top Up</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default LowBalance;