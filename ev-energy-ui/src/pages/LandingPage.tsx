import React, { useEffect, useState } from 'react';
import '../App.css';
import axios, { AxiosResponse, AxiosError } from 'axios';
import { UserLocation, ChargePoint } from '../types';
import ChargePointList from '../components/ChargePointList';

function LandingPage() {
  const [userLoc, setUserLoc] = useState<UserLocation | null>(null)
  const [chargePoints, setChargePoints] = useState<Array<ChargePoint> | null>(null)
  
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.permissions
        .query({ name: "geolocation" })
        .then(function (result) {
          switch (result.state) {
            case "granted":
            case "prompt":
              navigator.geolocation.getCurrentPosition(
                (position: GeolocationPosition) => setUserLoc({ lat: position.coords.latitude, lon: position.coords.longitude }),
                (error: GeolocationPositionError) => console.log(error)
              );
              break;
            case "denied":
              console.log('shit')
          }
        });
    } else {
      console.log("Geolocation is not supported by this browser.");
    }
  }, []);

  useEffect(() => {
    const getData = async () => {
      if (userLoc) {
        try {
          const params = {
            key: process.env.REACT_APP_API_KEY,
            distance: 10,
            latitude: userLoc.lat,
            longitude: userLoc.lon
          }
          const response: AxiosResponse<any> = await axios.get('https://api.openchargemap.io/v3/poi', { params })
          setChargePoints(response.data)
        } catch (err) {
          console.log(err)
        }
      }
    }
    if (userLoc) {
      getData()
    }

    return () => {
      setChargePoints(null);
    };
  }, [userLoc]);

  return (
    <div className="App">
      {chargePoints ? <ChargePointList {...chargePoints} /> : <p> shit </p>}
    </div>
  );
}

export default LandingPage;
