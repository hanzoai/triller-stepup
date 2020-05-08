import React, { useEffect, useState, useRef } from 'react';
import cn from 'classnames';
import styles from './style.module.scss';

export default function(props) {
  const { now, style } = props;
  const prevNowRef = useRef();

  const [flip, setFlip] = useState(false);

  const [oldVal, setOldVal] = useState(0);
  const [newVal, setNewVal] = useState(0);
  const [separator, setSeparator] = useState(false);

  useEffect(() => {
    let id;
    if (typeof now === 'string') {
      setSeparator(true);
      setOldVal(Math.max(now, 0));
    } else if (typeof prevNowRef.current === 'undefined') {
      setOldVal(Math.max(now, 0));
    } else if (now !== prevNowRef.current) {
      setOldVal(Math.max(prevNowRef.current, 0));
      setNewVal(Math.max(now, 0));
      setFlip(true);
      id = setTimeout(() => {
        setFlip(false);
        setOldVal(Math.max(now, 0));
      }, 600);
    }
    prevNowRef.current = now;

    return () => clearTimeout(id);
  }, [now]);

  if (separator) {
    const sc = {};
    if (style && style.background) {
      sc.color = style.background;
    }
    if (style && style.splitWidth) {
      sc.width = style.splitWidth;
    }

    return (
      <div className={styles.separator} style={sc}>
        &nbsp;
      </div>
    );
  }
  const ba = {
    border: 0,
  };
  if (style && style.background) {
    ba.background = style.background;
  }

  const sc = {};
  if (style && style.color) {
    sc.color = style.color;
  }

  return (
    <div className={styles.card} style={sc}>
      <div className={styles['b-1']} style={ba}>
        <div className={styles.top}>{newVal}</div>
      </div>
      <div className={styles['b-2']} style={ba}>
        <div className={styles.bottom}>{oldVal}</div>
      </div>
      <div className={cn({ [styles.f]: true, [styles.flip]: flip })}>
        <div className={styles['a-1']} style={ba}>
          <div className={styles.hou}>{newVal}</div>
        </div>
        <div className={styles['a-2']} style={ba}>
          <div className={styles.qian}>{oldVal}</div>
        </div>
      </div>
    </div>
  );
}
