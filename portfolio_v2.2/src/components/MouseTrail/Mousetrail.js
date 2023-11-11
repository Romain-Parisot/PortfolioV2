import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './Mousetrail.module.css';
import usePointerPosition from './usePointerPosition';
import useDelayedValue from './useDelayedValue';

function Dot({ position, opacity, scale, onClick, hover }) {
  const handleClick = event => {
    event.stopPropagation();
    if (onClick) {
      onClick(event);
    }
  };
  return (
    <div
      className={styles.MouseCircle}
      style={{
        opacity,
        transform: `translate(${position.x}px, ${position.y}px) scale(${scale})`,
        border: hover ? '2px solid var(--dark-mode-off)' : undefined,
      }}
      onClick={handleClick}
      onKeyDown={e => {
        if (e.key === 'Enter') {
          handleClick(e);
        }
      }}
      role="button"
      tabIndex={0}
      aria-label="Mouse"
    />
  );
}

export default function MouseTrail() {
  const [scale, setScale] = useState(1);
  const [opacity, setOpacity] = useState(1);
  const [hover, setHover] = useState(false);

  const delay = 0.5;
  const pos1 = usePointerPosition();
  const pos2 = useDelayedValue(pos1, delay);
  const pos3 = useDelayedValue(pos2, delay);
  const pos4 = useDelayedValue(pos3, delay);
  const pos5 = useDelayedValue(pos4, delay);
  const pos6 = useDelayedValue(pos5, delay);
  const pos7 = useDelayedValue(pos6, delay);
  const pos8 = useDelayedValue(pos7, delay);
  const pos9 = useDelayedValue(pos8, delay);
  const pos10 = useDelayedValue(pos9, delay);
  const pos11 = useDelayedValue(pos10, delay);
  const pos12 = useDelayedValue(pos11, delay);
  const pos13 = useDelayedValue(pos12, delay);
  const pos14 = useDelayedValue(pos13, delay);
  const pos15 = useDelayedValue(pos14, delay);
  const pos16 = useDelayedValue(pos15, delay);
  const pos17 = useDelayedValue(pos16, delay);
  const pos18 = useDelayedValue(pos17, delay);
  const pos19 = useDelayedValue(pos18, delay);
  const pos20 = useDelayedValue(pos19, delay);

  const ChangeScale = () => {
    setScale(1.3);
    setTimeout(() => {
      setScale(1);
    }, 50);
  };

  const ElementMouseEnter = () => {
    setScale(0.7);
    setOpacity(0.5);
    setHover(true);
  };

  const ElementMouseLeave = () => {
    setScale(1);
    setOpacity(1);
    setHover(false);
  };

  useEffect(() => {
    const elementHoverEffect = document.querySelectorAll('.MouseHoverEffect');
    if (elementHoverEffect.length > 0) {
      elementHoverEffect.forEach(element => {
        element.addEventListener('mouseenter', ElementMouseEnter);
        element.addEventListener('mouseleave', ElementMouseLeave);
      });
    } else {
      console.log('No element with class MouseHoverEffect');
    }
  }, []);

  useEffect(() => {
    document.addEventListener('click', ChangeScale);
    return () => {
      document.removeEventListener('click', ChangeScale);
    };
  }, []);

  return (
    <div>
      <Dot position={pos1} opacity={opacity} scale={scale} hover={hover} />
      <Dot position={pos2} opacity={opacity - 0.1} scale={scale - 0.1} hover={hover} />
      <Dot position={pos3} opacity={opacity - 0.1} scale={scale - 0.1} hover={hover} />
      <Dot position={pos4} opacity={opacity - 0.2} scale={scale - 0.2} hover={hover} />
      <Dot position={pos5} opacity={opacity - 0.2} scale={scale - 0.2} hover={hover} />
      <Dot position={pos6} opacity={opacity - 0.3} scale={scale - 0.3} hover={hover} />
      <Dot position={pos7} opacity={opacity - 0.3} scale={scale - 0.3} hover={hover} />
      <Dot position={pos8} opacity={opacity - 0.4} scale={scale - 0.4} hover={hover} />
      <Dot position={pos9} opacity={opacity - 0.4} scale={scale - 0.4} hover={hover} />
      <Dot position={pos10} opacity={opacity - 0.5} scale={scale - 0.5} hover={hover} />
      <Dot position={pos11} opacity={opacity - 0.5} scale={scale - 0.5} hover={hover} />
      <Dot position={pos12} opacity={opacity - 0.6} scale={scale - 0.6} hover={hover} />
      <Dot position={pos13} opacity={opacity - 0.6} scale={scale - 0.6} hover={hover} />
      <Dot position={pos14} opacity={opacity - 0.7} scale={scale - 0.7} hover={hover} />
      <Dot position={pos15} opacity={opacity - 0.7} scale={scale - 0.7} hover={hover} />
      <Dot position={pos16} opacity={opacity - 0.8} scale={scale - 0.8} hover={hover} />
      <Dot position={pos17} opacity={opacity - 0.8} scale={scale - 0.8} hover={hover} />
      <Dot position={pos18} opacity={opacity - 0.9} scale={scale - 0.9} hover={hover} />
      <Dot position={pos19} opacity={opacity - 0.9} scale={scale - 0.9} hover={hover} />
      <Dot position={pos20} opacity={opacity - 0.9} scale={scale - 0.9} hover={hover} />
    </div>
  );
}

Dot.propTypes = {
  position: PropTypes.shape({
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired,
  }).isRequired,
  opacity: PropTypes.number.isRequired,
  scale: PropTypes.number.isRequired,
  onClick: PropTypes.func,
  hover: PropTypes.bool.isRequired,
};

Dot.defaultProps = {
  onClick: () => {},
};
