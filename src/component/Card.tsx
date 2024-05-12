import React from "react";

const Card: React.FC = () => {
  return (
    <div className="mt-2 px-5">
      <div className="flex space-x-4">
        <div className="max-w-sm rounded overflow-hidden shadow-lg bg-[#4b8fff] text-white">
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Card 1</div>
            <p className="text-gray-100 text-base">
              This is the content of card 1. It can contain any information you
              want to display.
            </p>
          </div>
        </div>
        <div className="max-w-sm rounded overflow-hidden shadow-lg bg-[#4b8fff] text-white">
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Card 2</div>
            <p className="text-gray-100 text-base">
              This is the content of card 2. You can customize it with your own
              content.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
