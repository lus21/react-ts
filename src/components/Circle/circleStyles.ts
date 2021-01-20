import makeStyles from '@material-ui/core/styles/makeStyles';

const getCircleOffset = (outerCircleSize: number, innerCircleSize: number) => (outerCircleSize - innerCircleSize) / 2;

const rootCircleSize = 620;
const midCircleSize = 520;
const midCircleOffset = getCircleOffset(rootCircleSize, midCircleSize);
const innerCircleSize = 320;
const innerCircleOffset = getCircleOffset(midCircleSize, innerCircleSize);

const useCircleStyles = makeStyles({
  root: {
    width: '100%',
    height: '100vh',
  },
  rootCircle: {
    position: 'relative',
    borderRadius: '100%',
    width: rootCircleSize,
    height: rootCircleSize,
    background: 'gold',
  },
  midCircle: {
    position: 'absolute',
    top: midCircleOffset,
    left: midCircleOffset,
    borderRadius: '100%',
    width: midCircleSize,
    height: midCircleSize,
    background: '#fff1c0',
  },
  innerCircle: {
    position: 'absolute',
    top: innerCircleOffset,
    left: innerCircleOffset,
    borderRadius: '100%',
    width: innerCircleSize,
    height: innerCircleSize,
    background: 'yellow',
  },
  segment: {
    overflow: 'hidden',
    position: 'absolute',
    top: 0, 
    right: 0,
    width: '50%',
    height: '50%',
    transformOrigin: '0% 100%',
    '&:first-child': {
      transform: 'rotate(0deg) skewY(-60deg)',
      '& div': {
        background: 'green',
      }
    },
    '&:nth-child(2)': {
      transform: 'rotate(30deg) skewY(-60deg)',
      '& div': {
        background: 'tomato',
      }
    },
    '&:nth-child(3)': {
      transform: 'rotate(60deg) skewY(-60deg)',
      '& div': {
        background: 'aqua',
      }
    },
    '&:nth-child(4)': {
      transform: 'rotate(90deg) skewY(-60deg)',
      '& div': {
        background: 'yellow',
      }
    },
    '&:nth-child(5)': {
      transform: 'rotate(120deg) skewY(-60deg)',
      '& div': {
        background: 'orange',
      }
    },
    '&:nth-child(6)': {
      transform: 'rotate(150deg) skewY(-60deg)',
      '& div': {
        background: 'purple',
      }
    },
    '&:nth-child(7)': {
      transform: 'rotate(180deg) skewY(-60deg)',
      '& div': {
        background: 'cyan',
      }
    },
    '&:nth-child(8)': {
      transform: 'rotate(210deg) skewY(-60deg)',
      '& div': {
        background: 'brown',
      }
    },
    '&:nth-child(9)': {
      transform: 'rotate(240deg) skewY(-60deg)',
      '& div': {
        background: 'gray',
      }
    },
    '&:nth-child(10)': {
      transform: 'rotate(270deg) skewY(-60deg)',
      '& div': {
        background: 'pink',
      }
    },
    '&:nth-child(11)': {
      transform: 'rotate(300deg) skewY(-60deg)',
      '& div': {
        background: 'maroon',
      }
    },
    '&:nth-child(12)': {
      transform: 'rotate(330deg) skewY(-60deg)',
      '& div': {
        background: 'gold',
      }
    },
    
  },
  segmentText: {
    position: 'absolute',
    left: '-100%',
    width: '200%',
    height: '200%',
    textAlign: 'center',
    transform: 'skewY(60deg) rotate(15deg)',
    paddingTop: 20,
  }
});

export default useCircleStyles;
