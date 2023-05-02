import { useState } from "react";
import Modal from "antd/es/modal/Modal";
import CardModal from "./CardModal";

const Card = ({ card }) => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  return (
    <>
      <a onClick={() => setIsOpenModal(true)} className="hover:scale-95 ease-in-out duration-300">
        <img
          className="h-72 w-full object-cover rounded-lg shadow-md"
          src={card.urls.regular}
          alt={card.alt_description}
        />
      </a>
      <Modal
        open={isOpenModal}
        footer={null}
        onCancel={() => setIsOpenModal(false)}
        width={1000}
      >
        <CardModal card={card}/>
      </Modal>
    </>
  );
};

export default Card;
