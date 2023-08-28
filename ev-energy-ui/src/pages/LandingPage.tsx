import React, { useEffect, useState } from 'react';
import '../App.css';
import axios, { AxiosResponse } from 'axios';
import { UserLocation, ChargePoint, AlertProps } from '../types';
import ChargePointList from '../components/ChargePointList';
import { Alert, AlertTitle, Slider } from '@mui/material';

function LandingPage() {
  const [userLoc, setUserLoc] = useState<UserLocation | null>(null)
  const [chargePoints, setChargePoints] = useState<Array<ChargePoint> | null>(null)
  const [geoAlertProps, setGeoAlertProps] = useState<AlertProps | null>(null)
  const [chargePointAlertProps, setChargePointAlertProps] = useState<AlertProps | null>(null)
  const [distance, setDistance] = useState<number>(5)
  const [dataSent, setDataSent] = useState<AlertProps | null>(null)
  
  const showAlert = ({title, message, severity, closeFunction}: AlertProps) => {
    return (
      <Alert severity={severity} style={{justifyContent: 'center', width: '50%'}} onClose={closeFunction}>
        <AlertTitle>{title}</AlertTitle>
        {message}
      </Alert>
    )
  }

  const handleSliderChange = (event: React.SyntheticEvent | Event, newValue: number | Array<number>) => {
    if (typeof newValue == 'number') {
      setDistance(newValue)
    }
  };

  const startCharging = async (chargePointId: number) => {
    const params = {
      "user": 1,
      "car_id": 1,
      "charger_id": chargePointId
    }
    try {
      const response: AxiosResponse<any> = await axios.post('https://example.ev.energy/chargingsession', { params })
      setDataSent({
        title: 'Success!', 
        message: 'Start charging your car!', 
        severity: 'success',
        closeFunction: () => setDataSent(null)
      })
    } catch (e) {
      setDataSent({
        title: 'Success!', 
        message: 'Start charging your car!', 
        severity: 'success',
        closeFunction: () => setDataSent(null)
      })
    }
  }

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.permissions
        .query({ name: "geolocation" })
        .then(function (result) {
          switch (result.state) {
            case "granted":
            case "prompt":
              navigator.geolocation.getCurrentPosition(
                (position: GeolocationPosition) => setUserLoc({ 
                  lat: position.coords.latitude, 
                  lon: position.coords.longitude
                }),
                (error: GeolocationPositionError) => setGeoAlertProps({
                  title: 'Error', 
                  message: error.message, 
                  severity: 'error',
                  closeFunction: () =>setGeoAlertProps(null)
                })
              );
              break;
            case "denied":
              setGeoAlertProps({
                title: 'Error', 
                message: 'App requires location permission to work correctly', 
                severity: 'error',
                closeFunction: () =>setGeoAlertProps(null)
              })
          }
        });
    } else {
      setGeoAlertProps({
        title: 'Error', 
        message: 'App requires location permission to work correctly', 
        severity: 'error',
        closeFunction: () =>setGeoAlertProps(null)
      })
    }
  }, [geoAlertProps]);

  useEffect(() => {
    const getData = async () => {
      if (userLoc) {
        try {
          const params = {
            key: process.env.REACT_APP_API_KEY,
            distance: distance,
            latitude: userLoc.lat,
            longitude: userLoc.lon
          }
          const response: AxiosResponse<any> = await axios.get('https://api.openchargemap.io/v3/poi', { params })
          setChargePoints(response.data)
        } catch (err) {
          setChargePointAlertProps({
            title: 'Error', 
            message: 'Error calling OpenChargeMap API', 
            severity: 'error',
            closeFunction: () =>setChargePointAlertProps(null)
          })
        }
      }
    }
    getData()

    return () => {
      setChargePoints(null);
    };
  }, [userLoc, chargePointAlertProps, distance, dataSent]);

  return (
    <div className="App" style={{justifyContent: 'space-around'}}>
      <h1>Charge Points in Your Area</h1>
      {geoAlertProps ? showAlert(geoAlertProps) : null}
      {chargePointAlertProps ? showAlert(chargePointAlertProps) : null}
      {dataSent ? showAlert(dataSent) : null}
      <h3>Move the slider to change the search radius!</h3>
      <Slider defaultValue={5} step={1} min={1} max={15} onChangeCommitted={handleSliderChange} marks valueLabelDisplay='auto'/>
      {chargePoints ? <ChargePointList chargePointList={chargePoints} onSelect={startCharging} /> : null}
    </div>
  );
}

export default LandingPage;
