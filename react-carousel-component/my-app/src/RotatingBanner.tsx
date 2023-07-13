import { useEffect, useState } from 'react';
import { FaCircle } from 'react-icons/fa';
import { FaLessThan } from 'react-icons/fa';
import { FaGreaterThan } from 'react-icons/fa';
import { FaRegCircle } from 'react-icons/fa';
import './RotatingBanner.css';

type BannerProps = {
  images: string[];
};

type ImageProps = {
  src: string;
};

type ButtonProps = {
  onCustomClick: () => void;
};

type IndicatorProps = {
  onIndicate: (currentIndex: number) => void;
  currentIndex: number;
  count: number;
};

export default function RotatingBanner({ images }: BannerProps) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const currentInterval = setInterval(() => {
      setIndex((index + 1) % images.length);
    }, 3000);
    return () => clearInterval(currentInterval);
  }, [index, images]);

  function handleNext() {
    setIndex((index + 1) % images.length);
  }

  function handlePrev() {
    setIndex((index - 1 + images.length) % images.length);
  }

  function handleIndicate(currentIndex: number) {
    setIndex(currentIndex);
  }

  return (
    <>
      <div className="row justifyaround">
        <PrevButton onCustomClick={handlePrev} />
        <Image src={images[index]} />
        <NextButton onCustomClick={handleNext} />
      </div>
      <div className="row justifycenter">
        <Indicators
          onIndicate={handleIndicate}
          currentIndex={index}
          count={images.length}
        />
      </div>
    </>
  );
}

function NextButton({ onCustomClick }: ButtonProps) {
  return (
    <div className="column-side aligncenter">
      <FaGreaterThan className="left" onClick={onCustomClick} />
    </div>
  );
}

function PrevButton({ onCustomClick }: ButtonProps) {
  return (
    <div className="column-side aligncenter">
      <FaLessThan className="right" onClick={onCustomClick} />
    </div>
  );
}

function Indicators({ onIndicate, count, currentIndex }: IndicatorProps) {
  const buttons = [];

  for (let i = 0; i < count; i++) {
    if (i === currentIndex) {
      buttons.push(<FaCircle />);
    } else {
      buttons.push(<FaRegCircle onClick={() => onIndicate(i)} />);
    }
  }
  return (
    <div className="row justifycenter" id="dotRow">
      {buttons}
    </div>
  );
}

function Image({ src }: ImageProps) {
  return (
    <div className="column-middle">
      <img src={src} alt="Pokemon" />
    </div>
  );
}
