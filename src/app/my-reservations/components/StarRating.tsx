import React, { useEffect, useRef, useState } from 'react';
import * as S from './StarRating.css';
import StarOffIcon from '../../../../public/icons/star_off.svg';

interface RatingProps {
  maxStars?: number;
  value?: number;
  onChange?: (value: number) => void;
}

export default function Rating({
  maxStars = 5,
  value = 0,
  onChange,
}: RatingProps) {
  const [rating, setRating] = useState(value);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setRating(value);
  }, [value]);

  function getStarValueFromPoint(clientX: number) {
    if (!containerRef.current) return rating;

    const { left, width } = containerRef.current.getBoundingClientRect();

    const diff = clientX - left;
    const ratio = diff / width;
    let newRating = Math.ceil(ratio * maxStars);

    if (newRating < 1) newRating = 1;
    if (newRating > maxStars) newRating = maxStars;
    return newRating;
  }

  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
    const newRating = getStarValueFromPoint(e.clientX);
    setRating(newRating);
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    const newRating = getStarValueFromPoint(e.clientX);
    setRating(newRating);
  };

  const handlePointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    setIsDragging(false);

    const newRating = getStarValueFromPoint(e.clientX);
    setRating(newRating);
    onChange?.(newRating);
  };

  const handlePointerLeave = () => {
    if (isDragging) {
      setIsDragging(false);
      onChange?.(rating);
    }
  };

  return (
    <div
      ref={containerRef}
      className={S.starRatingContainer}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerLeave={handlePointerLeave}
    >
      {Array.from({ length: maxStars }, (_, i) => {
        const starIndex = i + 1;

        const isFilled = starIndex <= rating;

        const combinedClassName = isFilled
          ? `${S.starIconFilled} ${S.starIcon}`
          : S.starIcon;

        return <StarOffIcon key={starIndex} className={combinedClassName} />;
      })}
    </div>
  );
}
