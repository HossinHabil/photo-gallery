import React from "react";

const CardModal = ({ card }) => {
  return (
    <section className="flex flex-col lg:flex-row justify-evenly gap-6 text-center">
      <div>
        <img
          src={card.urls.small}
          alt={card.alt_description}
          className="h-full"
        />
      </div>
      <div>
        <h2 className="text-transparent bg-gradient-to-r from-teal-500 to-purple-600 bg-clip-text text-xl md:text-5xl mb-8 uppercase">
          {card.alt_description || card.description || card.user.bio}
        </h2>
        <h2 className="text-transparent bg-gradient-to-r from-teal-500 to-purple-600 bg-clip-text text-xl md:text-3xl mb-6">
          Author : {card.user.name}
        </h2>
        <p className="text-transparent bg-gradient-to-r from-teal-500 to-purple-600 bg-clip-text text-xl md:text-3xl mb-6">
          BIO : {card.user.bio || "Undefined"}
        </p>
      </div>
    </section>
  );
};

export default CardModal;
