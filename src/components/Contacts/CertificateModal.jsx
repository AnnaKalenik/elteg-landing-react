import React from 'react';
import '../../css/contacts.css';

const CertificateModal = ({active, setActive}) => {
    return (
        <div className={active ? "modal active" : "modal"} onClick={() => setActive(false)}>
            <div className={active ? "modal_content active" : "modal_content"} onClick={e => e.stopPropagation()}>
                <img src="../../images/licenses/certificate.png" alt="свидетельство" />
            </div>
        </div>
    )
}

export default CertificateModal;