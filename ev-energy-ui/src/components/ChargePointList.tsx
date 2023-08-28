import { ChargePointListProps } from '../types';
import { Accordion, AccordionSummary, AccordionDetails, Container, Typography, Button } from '@mui/material';

function ChargePointList({chargePointList, onSelect} : ChargePointListProps) {
    return (
        <Container>
            {Object.values(chargePointList).map(chargePoint => 
                <Accordion key={chargePoint.ID}>
                    <AccordionSummary>
                        <Typography>{chargePoint.AddressInfo.AddressLine1}</Typography>
                        <Typography>{chargePoint.AddressInfo.AddressLine2}</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Number of connections: {chargePoint.Connections.length}<br/>
                            Operational: {chargePoint.StatusType?.Title || "Unknown"}<br/>
                            Operator: {chargePoint.OperatorInfo?.Title || "Unknown"}<br/>
                            <Button onClick={() => onSelect(chargePoint.ID)}>
                                Start charging!
                            </Button>
                        </Typography>
                    </AccordionDetails>
                </Accordion>)}            
        </Container>
    )
}

export default ChargePointList;
