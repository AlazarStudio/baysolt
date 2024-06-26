import React, { useState, useEffect } from "react";

import classes from "./Sertificate.module.css";
import H2 from "../../Standart/H2/H2";
import Text from "../../Standart/Text/Text";

import GetData from "../../GetData/GetData";

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


function Sertificate({ children, ...props }) {

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
      <div className={classes.sertificate}>
        <H2 font-size={"32px"} color={"var(--color-white)"}>
          СЕРТИФИКАТЫ НА СУХИЕ СТРОИТЕЛЬНЫЕ СМЕСИ
        </H2>

        <Text width={"100%"} textAlign={"left"} fontSize={"16px"} color={"var(--color-white)"}>
          Мы заботимся о соответствии стандартам качества, чтобы представлять нашим клиентам качественное обслуживание
        </Text>

        <GetData tableName="certificate">
          {(data) =>
            <div className={classes.sertificate_items}>
              {data.slice(0, 3).map((item) =>
              (
                <div className={classes.sertificate_items__item}>
                  <img
                    style={{ width: "100%", height: "100%", objectFit: "cover", cursor: 'pointer' }}
                    src={`admin/img/${item.img}`} alt="" srcset=""
                    onClick={() => openModal(`admin/img/${item.img}`)} />
                </div>
              ))}
            </div>
          }
        </GetData>

      </div>
      <Modal isOpen={modalOpen} onClose={closeModal} imgSrc={currentImgSrc} />
    </>
  );
}

export default Sertificate;
