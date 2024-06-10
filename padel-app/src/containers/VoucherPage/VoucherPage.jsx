import {useParams} from 'react-router-dom';
import {Modal, QRCode} from 'antd';
import styles from "./VoucherPage.module.scss";
import bannerImg from '../../assets/images/banner-img.jpg';
import {useState} from "react";
import logo from '../../assets/astra-logo.png';
import LoyaltyCard from "../../components/LoyaltyCard/LoyaltyCard";

const VoucherPage = () => {
    const {voucherCode} = useParams();
    const [open, setOpen] = useState(false);

    const showModal = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <>
            <div className="tw-flex tw-items-center tw-justify-center">
                <img src={logo} className={styles.logo_icon} alt="iCliGo logo"/>
            </div>
            <div className="tw-flex tw-items-center tw-justify-center tw-mt-2">
                <div className={styles.root}>
                    <div className={styles.headerImg}>
                        <div className={styles.mainImg}>
                            <img alt={`banner image`} src={bannerImg}/></div>
                        <div className={styles.qrCodeImg} onClick={() => showModal()}>
                            <QRCode
                                errorLevel="H"
                                value={`voucher=${voucherCode}`}
                            />
                        </div>
                    </div>
                    <div className={styles.info}>
                        <LoyaltyCard />
                    </div>
                </div>
                <Modal
                    wrapClassName={styles.qrCodeModal}
                    open={open}
                    title={null}
                    footer={null}
                    onCancel={handleClose}
                    centered>
                    <QRCode
                        size={300}
                        errorLevel="H"
                        value={`voucher=${voucherCode}`}
                    />
                </Modal>
            </div>
        </>
    );
};

export default VoucherPage;
