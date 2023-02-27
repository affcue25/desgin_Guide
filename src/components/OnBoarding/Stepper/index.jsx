import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';

const steps = [
    'Claim Email Contacts',
    'Payment Information',
    'Billing Email Contacts',
    'Merchant Profile',
    'Discover Feed Card',
    'Merchant Categories'
];

export const StepperRole = ({stepperValue}) => {
    return (
        <Box sx={{ width: '100%' }}>
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
