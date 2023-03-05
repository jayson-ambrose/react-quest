import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import CombatOptions from "./CombatOptions";

function GameField({ gameEvent, count, matchCount }) {
  const [show, setShow] = useState(false);

  const optionTextBoj = Object.entries(gameEvent);
  console.log(optionTextBoj);
  const optionsTextArry = optionTextBoj.slice(6, 7);
  console.log(optionsTextArry[0][1]);
  const optionText = optionsTextArry[0][1].map((optionText) => (
    <CombatOptions optionText={optionText} key={optionText.id} />
  ));

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className="text-white col-5 text-center">
      {
        //Check if message failed
        count === matchCount ? (
          <>
            <Button variant="primary" onClick={handleShow}>
              {gameEvent.event}
            </Button>

            <Modal show={show} onHide={handleShow}>
              <Modal.Header closeButton onClick={handleClose}>
                <img
                  src={gameEvent.img}
                  alt={gameEvent.alt}
                  width="440px"
                  height="350px"
                />
              </Modal.Header>
              <Modal.Body>
                <h6>{gameEvent.description}</h6>
                {optionText}
              </Modal.Body>
            </Modal>
          </>
        ) : (
          <h6 className="gameText">continue...</h6>
        )
      }
    </div>
  );
}

export default GameField;
