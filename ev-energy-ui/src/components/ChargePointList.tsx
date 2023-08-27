import { ChargePoint } from '../types';
import { Accordion, AccordionSummary, AccordionDetails, Container, Typography } from '@mui/material';

function ChargePointList(chargePointList: Array<ChargePoint>) {
    return (
        <Container>
            {Object.values(chargePointList).map(chargePoint => 
                <Accordion>
                    <AccordionSummary>
                        <Typography>{chargePoint.AddressInfo.AddressLine1}</Typography>
                        <Typography>{chargePoint.AddressInfo.AddressLine2}</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Number of connections: {chargePoint.Connections.length}<br/>
                            Operational: {chargePoint.StatusType?.Title || "Unknown"}<br/>
                            Operator: {chargePoint.OperatorInfo?.Title || "Unknown"}<br/>
                        </Typography>
                    </AccordionDetails>
                </Accordion>)}            
        </Container>
    )
}

export default ChargePointList;
