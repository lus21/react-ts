/* eslint-disable react/no-unused-prop-types */
import React from 'react';
import Box from '@material-ui/core/Box';
import useCircleStyles from './circleStyles';

function Circle() {
  const styles = useCircleStyles();

  return (
    <Box display="flex" alignItems="center" justifyContent="center" className={styles.root}>
      <div id="root-circle" className={styles.rootCircle}>
        <div className={styles.midCircle}>
          <div className={styles.innerCircle}>
            <div className={styles.segment}><div className={styles.segmentText}>1</div></div>
            <div className={styles.segment}><div className={styles.segmentText}>2</div></div>
            <div className={styles.segment}><div className={styles.segmentText}>3</div></div>
            <div className={styles.segment}><div className={styles.segmentText}>4</div></div>
            <div className={styles.segment}><div className={styles.segmentText}>5</div></div>
            <div className={styles.segment}><div className={styles.segmentText}>6</div></div>
            <div className={styles.segment}><div className={styles.segmentText}>7</div></div>
            <div className={styles.segment}><div className={styles.segmentText}>8</div></div>
            <div className={styles.segment}><div className={styles.segmentText}>9</div></div>
            <div className={styles.segment}><div className={styles.segmentText}>10</div></div>
            <div className={styles.segment}><div className={styles.segmentText}>11</div></div>
            <div className={styles.segment}><div className={styles.segmentText}>12</div></div>
          </div>
        </div>
      </div>
    </Box>
  );
}

export default Circle;
