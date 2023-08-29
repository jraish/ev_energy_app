import { ChargePointListProps } from '../types';
import { Accordion, AccordionSummary, AccordionDetails, Container, Typography, Button } from '@mui/material';

function ChargePointList({chargePointList, onSelect} : ChargePointListProps) {
    return (
        <Container>
            {Object.values(chargePointList).map(chargePoint => 
                <Accordion key={chargePoint.ID}>
                    <AccordionSummary style={{display: 'flex', flexDirection: 'column'}}>
                        <Container maxWidth='md' style={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
                            <Typography>{chargePoint.AddressInfo.AddressLine1}</Typography>
                            <Typography>{chargePoint.AddressInfo.AddressLine2}</Typography>
                        </Container>
                    </AccordionSummary>
                    <AccordionDetails style={{display: 'flex', flexDirection: 'column'}}>
                        <Container maxWidth='md' style={{display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
                            <Typography style={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
                                Number of connections: {chargePoint.Connections.length}<br/>
                            </Typography>
                            <Typography style={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
                                Operational: {chargePoint.StatusType?.Title || "Unknown"}<br/>
                            </Typography>
                            <Typography style={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
                                Operator: {chargePoint.OperatorInfo?.Title || "Unknown"}<br/>
                            </Typography>
                            <Container style={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
                                <Button onClick={() => onSelect(chargePoint.ID)}>
                                    Start charging!
                                </Button>
                            </Container>
                        </Container>
                    </AccordionDetails>
                </Accordion>)}            
        </Container>
    )
}

export default ChargePointList;
