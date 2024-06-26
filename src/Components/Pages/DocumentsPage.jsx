import React, { useState, useEffect } from "react";

import GetData from "../GetData/GetData";
import CenterBlock from "../Standart/CenterBlock/CenterBlock";
import WidthBlock from "../Standart/WidthBlock/WidthBlock";
import Text from "../Standart/Text/Text";
import Button from "../Standart/Button/Button";

function getFileExtension(filename) {
    return filename.slice(((filename.lastIndexOf(".") - 1) >>> 0) + 2);
}

function Modal({ isOpen, onClose, imgSrc }) {
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden"; // Disable scroll
        } else {
            document.body.style.overflow = "auto"; // Enable scroll
        }
        return () => {
            document.body.style.overflow = "auto"; // Cleanup on unmount
        };
    }, [isOpen]);

    if (!isOpen) return null;

    const handleClickOutside = (e) => {
        if (e.target.id === "modalOverlay") {
            onClose();
        }
    };

    return (
        <div id="modalOverlay" style={modalStyles.overlay} onClick={handleClickOutside}>
            <div style={modalStyles.modal}>
                <span style={modalStyles.closeButton} onClick={onClose}>&times;</span>
                <img src={imgSrc} alt="Fullscreen" style={modalStyles.image} />
            </div>
        </div>
    );
}

const modalStyles = {
    overlay: {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1000
    },
    modal: {
        position: 'relative',
        width: '80%',
        maxWidth: '800px',
        maxHeight: '80%',
        overflow: 'auto',
    },
    closeButton: {
        position: 'absolute',
        top: '10px',
        right: '10px',
        color: 'white',
        fontSize: '30px',
        cursor: 'pointer',
    },
    image: {
        width: '100%',
        height: 'auto',
    }
};


function DocumentsPage({ children, ...props }) {

    const [modalOpen, setModalOpen] = useState(false);
    const [currentImgSrc, setCurrentImgSrc] = useState('');

    const openModal = (imgSrc) => {
        setCurrentImgSrc(imgSrc);
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
        setCurrentImgSrc('');
    };

    return (
        <>
            <CenterBlock className="DocumentPageCenterBlock">
                <Text color={"#fff"} fontSize={"24px"}> ЮРИДИЧЕСКИЕ ДОКУМЕНТЫ И СЕРТИФИКАТЫ НА СУХИЕ СТРОИТЕЛЬНЫЕ СМЕСИ </Text>

                <WidthBlock flexDirection={"row"}>
                    <GetData tableName="certificate">
                        {(data) =>
                            <div className="DocumentPageCertificateBlock">
                                {data.map((item) =>
                                (
                                    <div className="DocumentPageCertificate" key={item.img}>
                                        <img
                                            style={{ width: "100%", height: "100%", objectFit: "cover", cursor: 'pointer' }}
                                            src={`admin/img/${item.img}`} alt=""
                                            onClick={() => openModal(`admin/img/${item.img}`)}
                                        />
                                    </div>
                                ))}
                            </div>
                        }
                    </GetData>
                </WidthBlock>
            </CenterBlock>
            <GetData tableName="docs">
                {(data) =>
                    <CenterBlock className="DocumentPageDocumentsCenterBlock">
                        {data.map((item) =>
                        (
                            <WidthBlock className="DocumentPageDocuments" backgroundColor={"#112E4F"} borderRadius={"10px"} key={item.img}>
                                <Text color={"#fff"}>{item.title + "." + getFileExtension(item.img)}</Text>
                                <Button onClick={() => window.open(`/admin/img/${item.img}`)}>
                                    Смотреть
                                </Button>
                            </WidthBlock>
                        ))}
                    </CenterBlock>
                }
            </GetData>
            <Modal isOpen={modalOpen} onClose={closeModal} imgSrc={currentImgSrc} />
        </>
    );
}

export default DocumentsPage;
