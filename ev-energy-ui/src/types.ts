interface UserLocation {
    lat: number;
    lon: number;
}


const exampleChargePoint = {
        "DataProvider": {
            "WebsiteURL": "http://www.afdc.energy.gov/",
            "Comments": null,
            "DataProviderStatusType": {
                "IsProviderEnabled": true,
                "ID": 20,
                "Title": "Automated Import"
            },
            "IsRestrictedEdit": false,
            "IsOpenDataLicensed": true,
            "IsApprovedImport": true,
            "License": "This data is provided by the National Renewable Energy Laboratory (\"NREL\"), which is operated by the Alliance for Sustainable Energy, LLC (\"Alliance\"), for the U.S. Department of Energy (\"DOE\"), and may be used for any purpose whatsoever.",
            "DateLastImported": "2023-07-12T09:41:50.737Z",
            "ID": 2,
            "Title": "afdc.energy.gov"
        },
        "OperatorInfo": {
            "WebsiteURL": "https://semaconnect.com/",
            "Comments": null,
            "PhonePrimaryContact": null,
            "PhoneSecondaryContact": null,
            "IsPrivateIndividual": false,
            "AddressInfo": null,
            "BookingURL": null,
            "ContactEmail": null,
            "FaultReportEmail": null,
            "IsRestrictedEdit": false,
            "ID": 39,
            "Title": "SemaConnect"
        },
        "UsageType": {
            "IsPayAtLocation": null,
            "IsMembershipRequired": null,
            "IsAccessKeyRequired": null,
            "ID": 1,
            "Title": "Public"
        },
        "StatusType": {
            "IsOperational": true,
            "IsUserSelectable": true,
            "ID": 50,
            "Title": "Operational"
        },
        "SubmissionStatus": {
            "IsLive": true,
            "ID": 100,
            "Title": "Imported and Published"
        },
        "UserComments": null,
        "PercentageSimilarity": null,
        "MediaItems": null,
        "IsRecentlyVerified": true,
        "DateLastVerified": "2023-07-12T08:36:00Z",
        "ID": 224217,
        "UUID": "42E7651C-8F80-4793-AEFC-5004FB26168F",
        "ParentChargePointID": null,
        "DataProviderID": 2,
        "DataProvidersReference": "220303",
        "OperatorID": 39,
        "OperatorsReference": null,
        "UsageTypeID": 1,
        "UsageCost": null,
        "AddressInfo": {
            "ID": 224600,
            "Title": "The Wharf Public Garage 3",
            "AddressLine1": "600 Water Street Southwest",
            "AddressLine2": null,
            "Town": "Washington",
            "StateOrProvince": "DC",
            "Postcode": "20024",
            "CountryID": 2,
            "Country": {
                "ISOCode": "US",
                "ContinentCode": "NA",
                "ID": 2,
                "Title": "United States"
            },
            "Latitude": 38.875356,
            "Longitude": -77.021099,
            "ContactTelephone1": "800-663-5633",
            "ContactTelephone2": null,
            "ContactEmail": null,
            "AccessComments": "",
            "RelatedURL": "https://semaconnect.com/",
            "Distance": 0.3254970294458162,
            "DistanceUnit": 2
        },
        "Connections": [
            {
                "ID": 375291,
                "ConnectionTypeID": 1,
                "ConnectionType": {
                    "FormalName": "SAE J1772-2009",
                    "IsDiscontinued": null,
                    "IsObsolete": null,
                    "ID": 1,
                    "Title": "Type 1 (J1772)"
                },
                "Reference": null,
                "StatusTypeID": null,
                "StatusType": null,
                "LevelID": 2,
                "Level": {
                    "Comments": "Over 2 kW, usually non-domestic socket type",
                    "IsFastChargeCapable": false,
                    "ID": 2,
                    "Title": "Level 2 : Medium (Over 2kW)"
                },
                "Amps": 16,
                "Voltage": 230,
                "PowerKW": 3.7,
                "CurrentTypeID": 10,
                "CurrentType": {
                    "Description": "Alternating Current - Single Phase",
                    "ID": 10,
                    "Title": "AC (Single-Phase)"
                },
                "Quantity": 14,
                "Comments": "kW power is an estimate based on the connection type"
            }
        ],
        "NumberOfPoints": null,
        "GeneralComments": null,
        "DatePlanned": null,
        "DateLastConfirmed": null,
        "StatusTypeID": 50,
        "DateLastStatusUpdate": "2023-07-12T08:36:00Z",
        "MetadataValues": null,
        "DataQualityLevel": 3,
        "DateCreated": "2023-02-13T05:11:00Z",
        "SubmissionStatusTypeID": 100
}

type ChargePoint = typeof exampleChargePoint;

export type {
    UserLocation,
    ChargePoint
}