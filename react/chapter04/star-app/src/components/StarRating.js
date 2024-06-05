import { useState } from "react";
import Star from "./Star.js"

const createArray = length => [...Array(length)]

// 순수 컴포넌트 = 상태가 없는 컴포넌트

export default function StarRating(
  { totalStars = 5, selectedStars = 0, onRate = f => f }) {
  return (
    <>
      {createArray(totalStars).map((n, i) =>
        <Star
          key={i}
          selected={selectedStars > i}
          onSelect={() => { onRate(i + 1) }}
        />
      )}
      <p className="star-text">{selectedStars} of {totalStars} stars</p>
    </>
  )
}