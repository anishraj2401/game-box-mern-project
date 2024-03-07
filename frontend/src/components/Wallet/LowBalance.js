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
            <div class="positionBlurContent modal d-inline" tabindex="-1" role="dialog" >
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title">Low Balance</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close" onClick={closeModal}>
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <p>Your Balance is low ({walletData.currency} {walletData.amount}.00). Please top-up.</p>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal" onClick={closeModal}>Close</button>
                            <button type="button" class="btn btn-primary" onClick={topUp}>Top Up</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default LowBalance;