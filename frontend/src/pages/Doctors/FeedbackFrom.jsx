import React, { useState } from "react";
import { AiFillStar } from "react-icons/ai";

const FeedbackFrom = () => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [reviewText, setReviewText] = useState("");

  const handleSubmitReview = async (e) => {
    e.preventDefault();
  };
  return (
    <form action="">
      <div>
        <h3 className="text-headingColor text-[16px] leading-6 font-semibold mb-4">
          How would you rate the overall experience?*
        </h3>
        <div>
          {[...Array(5).keys()].map((_, index) => {
            index += 1;
            return (
              <button
                key={index}
                type="button"
                className={`${
                  index <= ((rating && hover) || hover)
                    ? "text-yellowColor"
                    : "text-gray-400"
                } bg-transparent border-none outline-none text-[22px] cursor-pointer`}
                onClick={() => setRating(index)}
                onMouseEnter={() => setHover(index)}
                onMouseLeave={() => setHover(rating)}
                onDoubleClick={() => {
                  setHover(0);
                  setRating(0);
                }}
              >
                <span>
                  <AiFillStar />
                </span>
              </button>
            );
          })}
        </div>
      </div>

      <div className="mt-[30px]">
        <h3 className="text-headingColor text-[16px] leading-6 font-semibold mb-4">
          Share your feedback or suggestions?*
        </h3>
        <textarea
          id=""
          cols="30"
          rows="10"
          onChange={(e) => setReviewText(e.target.value)}
          placeholder="Write your feedback or suggestions"
          className="border border-solid border-[#0066ff34] focus:outline-none outline-primaryColor w-full px-4 py-3 rounded-md"
        ></textarea>
        <button type="submit" onClick={handleSubmitReview} className="btn">
          Submit Feedback
        </button>
      </div>
    </form>
  );
};

export default FeedbackFrom;
