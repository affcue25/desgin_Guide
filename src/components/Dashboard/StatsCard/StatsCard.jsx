import { Card, CardContent, Typography, IconButton, CircularProgress } from '@mui/material';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import { ArrowUpward, ArrowDownward, AttachMoney, Add } from '@mui/icons-material';

function CircularProgressWithLabel(props) {
  return (
    <Box sx={{ position: 'relative', display: 'inline-flex' }}>
      <CircularProgress variant="determinate" color="inherit" sx={{ color: props.circleColor}} {...props} />
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: 'absolute',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Typography variant="caption" component="div" color="text.secondary">
          {`${Math.round(props.value)}%`}
        </Typography>
      </Box>
    </Box>
  );
}

CircularProgressWithLabel.propTypes = {
  /**
   * The value of the progress indicator for the determinate variant.
   * Value between 0 and 100.
   * @default 0
   */
  value: PropTypes.number.isRequired,
  circleColor: PropTypes.string.isRequired,
};

export const StatsCard = ({ title, value, progress, isIncrease, borderLineColor, circleColor, isDollar, isPlus, leftShadow  }) => {
  return (
    <Card sx={{boxShadow: leftShadow}}>
      <CardContent sx={{ display: 'flex', flexDirection: 'column' }}>
        <Typography gutterBottom variant="subtitle1" component="div" sx={{ color: "gray", fontSize: "0.8rem" }}>
          {title}
        </Typography>
        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', flexDirection: 'row' }}>
            <IconButton style={{ padding: 0 }}>
              {isIncrease ? <ArrowUpward color="action" /> : isDollar ? <AttachMoney color="action" /> : isPlus ? <Add color="action" /> : <ArrowDownward color="error" />}
            </IconButton>
            <Typography variant="h4" component="div" sx={{ ml: 1 , fontWeight: "bold"}}>
              {value} 
            </Typography>
            <Typography variant="h5" component="div" color="GrayText" sx={{ ml: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              {isIncrease ? "%" : isDollar ? "" : isPlus ? "hires" : "%"}
            </Typography>
          </div>
          <CircularProgressWithLabel value={progress} circleColor={circleColor} />
        </div>
      </CardContent>
      <div style={{ height: 5, backgroundColor: borderLineColor }}></div>
    </Card>
  );
};
