import { useState, useEffect } from 'react';
import { Button, Modal, Spin } from 'antd';
import styles from './LoyaltyCard.module.scss';
import useClient from "../../services/useClient.js";
import { ReloadOutlined } from '@ant-design/icons';

// eslint-disable-next-line react/prop-types
const LoyaltyCard = ({ voucher }) => {
    const {data, isLoading} = useClient(voucher);

    const [modalVisible, setModalVisible] = useState(false);

    useEffect(() => {
        setModalVisible(data?.freeGame)
    }, [data?.freeGame]);

const handleRefresh = () => {
    location.reload();
    }

    const closeModal = () => {
        setModalVisible(false);
    };

    if (isLoading) {
        return <Spin />;
    }
    return (
        <div className={styles.cardContainer}>
            <div className={styles.circlesContainer}>
                {[...Array(10)].map((_, index) => (
                    <div key={index} className={styles.circle}>
                        {index < data?.games && <div className={styles.tennisBall} />}
                    </div>
                ))}
            </div>
            <Button type="primary" onClick={handleRefresh}>
                Refresh
                <ReloadOutlined />
            </Button>
            <Modal
                title="Parabéns!"
                visible={modalVisible}
                onOk={closeModal}
                onCancel={closeModal}
            >
                <p>Ganhou um jogo grátis!</p>
            </Modal>
        </div>
    );
};

export default LoyaltyCard;
