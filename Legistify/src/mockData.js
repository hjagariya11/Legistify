export const LawyerDetails = [
    {
        "id": "1",
        "name": "Spiderman law firm",
        "speciality": "Divorce",
        "appointmentCost": "1000",
        "availability": "Monday, Thursday",
        "image": "p1.jpeg",
        "appointment" : [ {
                    text: 'Watercolor Landscape',
                    roomId: [1],
                    startDate: new Date('2020-11-01T17:30:00.000Z'),
                    endDate: new Date('2020-11-01T19:00:00.000Z'),
                    recurrenceRule: 'FREQ=WEEKLY;BYDAY=MO,TH;COUNT=10',
                    }, {
                    text: 'Oil Painting for Beginners',
                    roomId: [2],
                    startDate: new Date('2020-11-01T17:30:00.000Z'),
                    endDate: new Date('2020-11-01T19:00:00.000Z'),
                    recurrenceRule: 'FREQ=WEEKLY;BYDAY=SU,WE;COUNT=10',
                    }, {
                    text: 'Testing',
                    roomId: [3],
                    startDate: new Date('2020-11-01T20:00:00.000Z'),
                    endDate: new Date('2020-11-01T21:00:00.000Z'),
                    recurrenceRule: 'FREQ=WEEKLY;BYDAY=SU;WKST=TU;INTERVAL=2;COUNT=2',
                    }, {
                    text: 'Meeting of Instructors',
                    roomId: [4],
                    startDate: new Date('2020-11-01T17:00:00.000Z'),
                    endDate: new Date('2020-11-01T17:15:00.000Z'),
                    recurrenceRule: 'FREQ=DAILY;BYDAY=TU;UNTIL=20201203',
                    }]
    },
    {
        "id": "2",
        "name": "Ironman law firm",
        "speciality": "property",
        "appointmentCost": "4000",
        "availability": "Monday, Friday, Saturday",
        "image": "p2.jpeg",
         "appointment" : [ 
                  {
                    text: 'Testing',
                    roomId: [3],
                    startDate: new Date('2020-11-01T20:00:00.000Z'),
                    endDate: new Date('2020-11-01T21:00:00.000Z'),
                    recurrenceRule: 'FREQ=WEEKLY;BYDAY=SU;WKST=TU;INTERVAL=2;COUNT=2',
                    }, {
                    text: 'Meeting of Instructors',
                    roomId: [4],
                    startDate: new Date('2020-11-01T17:00:00.000Z'),
                    endDate: new Date('2020-11-01T17:15:00.000Z'),
                    recurrenceRule: 'FREQ=DAILY;BYDAY=TU;UNTIL=20201203',
                    }]
    },
    {
        "id": "3",
        "name": "Thor law firm",
        "speciality": "Criminal",
        "appointmentCost": "1200",
        "availability": "Wednesday, Thursday, Saturday",
        "image": "p3.jpeg",
         "appointment" : [ {
                    text: 'Watercolor Landscape',
                    roomId: [1],
                    startDate: new Date('2020-11-01T17:30:00.000Z'),
                    endDate: new Date('2020-11-01T19:00:00.000Z'),
                    recurrenceRule: 'FREQ=WEEKLY;BYDAY=MO,TH;COUNT=10',
                    },{
                    text: 'Meeting of Instructors',
                    roomId: [4],
                    startDate: new Date('2020-11-01T17:00:00.000Z'),
                    endDate: new Date('2020-11-01T17:15:00.000Z'),
                    recurrenceRule: 'FREQ=DAILY;BYDAY=TU;UNTIL=20201203',
                    }]
    },
    {
        "id": "4",
        "name": "Dr Strange ",
        "speciality": "Ese hi",
        "appointmentCost": "1500",
        "availability": "Tuesday, Thursday",
        "image": "p4.jpeg",
         "appointment" : [ {
                    text: 'Watercolor Landscape',
                    roomId: [1],
                    startDate: new Date('2020-11-01T17:30:00.000Z'),
                    endDate: new Date('2020-11-01T19:00:00.000Z'),
                    recurrenceRule: 'FREQ=WEEKLY;BYDAY=MO,TH;COUNT=10',
                    }, {
                    text: 'Oil Painting for Beginners',
                    roomId: [2],
                    startDate: new Date('2020-11-01T17:30:00.000Z'),
                    endDate: new Date('2020-11-01T19:00:00.000Z'),
                    recurrenceRule: 'FREQ=WEEKLY;BYDAY=SU,WE;COUNT=10',
                    }, {
                    text: 'Testing',
                    roomId: [3],
                    startDate: new Date('2020-11-01T20:00:00.000Z'),
                    endDate: new Date('2020-11-01T21:00:00.000Z'),
                    recurrenceRule: 'FREQ=WEEKLY;BYDAY=SU;WKST=TU;INTERVAL=2;COUNT=2',
                    }]
    }
];