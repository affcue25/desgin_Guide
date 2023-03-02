import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';

const steps = [
    'Claim Email ',
    'Payment ',
    'Billing Email ',
    'Merchant Profile',
    'Discover Feed Card',
    'Categories'
];

export const StepperRole = ({stepperValue}) => {
    return (
        <Box sx={{ width: '100%',marginTop:"3rem" }}>
            <Stepper activeStep={stepperValue} alternativeLabel>
                {steps.map((label) => (
                    <Step key={label}>
                        <StepLabel>{label}</StepLabel>
                    </Step>
                ))}
            </Stepper>
        </Box>
    );
}
