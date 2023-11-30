"use client";
import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';


interface Screen {
  name: string;
  location: string;
  seats: any[]; // Change the type to an array of numbers
  city: string;
  screenType: string;
}



const CreateScreenPage = () => {

  const tempSeatsLayout =  [
    {
        // VIP Seats
        type: 'vip',
        rows: [
            {
                // row A
                rowname: 'A',
                seats: [
                    {
                        seat_id: '1'
                    },
                    {
                        seat_id: '2'
                    },
                    {
                        seat_id: '3'
                    },
                    {
                        seat_id: '4'
                    },
                    {
                        seat_id: '5'
                    },
                    {
                        seat_id: '6'
                    },
                    {
                        seat_id: '7'
                    },
                    {
                        seat_id: '8'
                    },
                    {
                        seat_id: '9'
                    },
                    {
                        seat_id: '10'
                    }
                ]
            },
            {
                // row B
                rowname: 'B',
                seats: [
                    {
                        seat_id: '1'
                    },
                    {
                        seat_id: '2'
                    },
                    {
                        seat_id: '3'
                    },
                    {
                        seat_id: '4'
                    },
                    {
                        seat_id: '5'
                    },
                    {
                        seat_id: '6'
                    },
                    {
                        seat_id: '7'
                    },
                    {
                        seat_id: '8'
                    },
                    {
                        seat_id: '9'
                    },
                    {
                        seat_id: '10'
                    }
                ]
            }
        ],
        price: 500
    },
    {
        // Silver Seats
        type: 'silver',
        rows: [
            {
                // row C
                rowname: 'C',
                seats: [
                    {
                        seat_id: '1'
                    },
                    {
                        seat_id: '2'
                    },
                    {
                        seat_id: '3'
                    },
                    {
                        seat_id: '4'
                    },
                    {
                        seat_id: '5'
                    },
                    {
                        seat_id: '6'
                    },
                    {
                        seat_id: '7'
                    },
                    {
                        seat_id: '8'
                    },
                    {
                        seat_id: '9'
                    },
                    {
                        seat_id: '10'
                    }
                ]
            },
            {
                // row D
                rowname: 'D',
                seats: [
                    {
                        seat_id: '1'
                    },
                    {
                        seat_id: '2'
                    },
                    {
                        seat_id: '3'
                    },
                    {
                        seat_id: '4'
                    },
                    {
                        seat_id: '5'
                    },
                    {
                        seat_id: '6'
                    },
                    {
                        seat_id: '7'
                    },
                    {
                        seat_id: '8'
                    },
                    {
                        seat_id: '9'
                    },
                    {
                        seat_id: '10'
                    }
                ]
            },
            {
                // row E
                rowname: 'E',
                seats: [
                    {
                        seat_id: '1'
                    },
                    {
                        seat_id: '2'
                    },
                    {
                        seat_id: '3'
                    },
                    {
                        seat_id: '4'
                    },
                    {
                        seat_id: '5'
                    },
                    {
                        seat_id: '6'
                    },
                    {
                        seat_id: '7'
                    },
                    {
                        seat_id: '8'
                    },
                    {
                        seat_id: '9'
                    },
                    {
                        seat_id: '10'
                    }
                ]
            }
        ],
        price: 300
    },
    {
        // Regular Seats
        type: 'regular',
        rows: [
            {
                // row F
                rowname: 'F',
                seats: [
                    {
                        seat_id: '1'
                    },
                    {
                        seat_id: '2'
                    },
                    {
                        seat_id: '3'
                    },
                    {
                        seat_id: '4'
                    },
                    {
                        seat_id: '5'
                    },
                    {
                        seat_id: '6'
                    },
                    {
                        seat_id: '7'
                    },
                    {
                        seat_id: '8'
                    },
                    {
                        seat_id: '9'
                    },
                    {
                        seat_id: '10'
                    }
                ]
            },
            {
                // row G
                rowname: 'G',
                seats: [
                    {
                        seat_id: '1'
                    },
                    {
                        seat_id: '2'
                    },
                    {
                        seat_id: '3'
                    },
                    {
                        seat_id: '4'
                    },
                    {
                        seat_id: '5'
                    },
                    {
                        seat_id: '6'
                    },
                    {
                        seat_id: '7'
                    },
                    {
                        seat_id: '8'
                    },
                    {
                        seat_id: '9'
                    },
                    {
                        seat_id: '10'
                    }
                ]
            },
            {
                // row H
                rowname: 'H',
                seats: [
                    {
                        seat_id: '1'
                    },
                    {
                        seat_id: '2'
                    },
                    {
                        seat_id: '3'
                    },
                    {
                        seat_id: '4'
                    },
                    {
                        seat_id: '5'
                    },
                    {
                        seat_id: '6'
                    },
                    {
                        seat_id: '7'
                    },
                    {
                        seat_id: '8'
                    },
                    {
                        seat_id: '9'
                    },
                    {
                        seat_id: '10'
                    }
                ]
            },
            {
                // row I
                rowname: 'I',
                seats: [
                    {
                        seat_id: '1'
                    },
                    {
                        seat_id: '2'
                    },
                    {
                        seat_id: '3'
                    },
                    {
                        seat_id: '4'
                    },
                    {
                        seat_id: '5'
                    },
                    {
                        seat_id: '6'
                    },
                    {
                        seat_id: '7'
                    },
                    {
                        seat_id: '8'
                    },
                    {
                        seat_id: '9'
                    },
                    {
                        seat_id: '10'
                    }
                ]
            },
            {
                // row J
                rowname: 'J',
                seats: [
                    {
                        seat_id: '1'
                    },
                    {
                        seat_id: '2'
                    },
                    {
                        seat_id: '3'
                    },
                    {
                        seat_id: '4'
                    },
                    {
                        seat_id: '5'
                    },
                    {
                        seat_id: '6'
                    },
                    {
                        seat_id: '7'
                    },
                    {
                        seat_id: '8'
                    },
                    {
                        seat_id: '9'
                    },
                    {
                        seat_id: '10'
                    }
                ]
            }
        ],
        price: 100
    }

]

const [screen, setScreen] = useState<Screen>({
  name: '',
  location: '',
  seats: tempSeatsLayout,
  city: '',
  screenType: '',
});


  return (
    <div>page</div>
  )
}

export default CreateScreenPage