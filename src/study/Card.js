import React from "react";
import { readCard } from "../utils/api";

function Card() {
  const [cardData, setCardData] = useState({});

  useEffect(() => {
    function loadCards() {
      const loadedCard = readCard;
      setCardData(loadedCard);
    }

    loadCards();
    return () => {
      abortController.abort();
    };
  }, [cardData]);

  return (
    <div className="card w-75 mb-3">
      <div className="card-body">
        <p className="card-text">
        {cardData.front}
        </p>
        <p className="card-text">
            {cardData.back}
            </p>
        <a href="#" className="btn btn-primary">
          Button
        </a>
        <a href="#" className="btn btn-danger">Delete</a>
      </div>
    </div>
  );
}

export default Card;
