import React from 'react';
import PropTypes from 'prop-types';
import styles from './Mousetrail.module.css';
import usePointerPosition from './usePointerPosition';
import useDelayedValue from './useDelayedValue';

function Dot({ position, opacity, scale }) {
  return (
    <div
      className={styles.MouseCircle}
      style={{ opacity, transform: `translate(${position.x}px, ${position.y}px) scale(${scale})` }}
    />
  );
}

export default function MouseTrail() {
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
  return (
    <>
      <Dot position={pos1} opacity={1} scale={1} />
      <Dot position={pos2} opacity={0.9} scale={0.9} />
      <Dot position={pos3} opacity={0.9} scale={0.9} />
      <Dot position={pos4} opacity={0.8} scale={0.8} />
      <Dot position={pos5} opacity={0.8} scale={0.8} />
      <Dot position={pos6} opacity={0.7} scale={0.7} />
      <Dot position={pos7} opacity={0.7} scale={0.7} />
      <Dot position={pos8} opacity={0.6} scale={0.6} />
      <Dot position={pos9} opacity={0.6} scale={0.6} />
      <Dot position={pos10} opacity={0.5} scale={0.5} />
      <Dot position={pos11} opacity={0.5} scale={0.5} />
      <Dot position={pos12} opacity={0.4} scale={0.4} />
      <Dot position={pos13} opacity={0.4} scale={0.4} />
      <Dot position={pos14} opacity={0.3} scale={0.3} />
      <Dot position={pos15} opacity={0.3} scale={0.3} />
      <Dot position={pos16} opacity={0.2} scale={0.2} />
      <Dot position={pos17} opacity={0.2} scale={0.2} />
      <Dot position={pos18} opacity={0.1} scale={0.1} />
      <Dot position={pos19} opacity={0.1} scale={0.1} />
      <Dot position={pos20} opacity={0.1} scale={0.1} />
    </>
  );
}

Dot.propTypes = {
  position: PropTypes.shape({
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired,
  }).isRequired,
  opacity: PropTypes.number.isRequired,
  scale: PropTypes.number.isRequired,
};
