import { createSlice } from "@reduxjs/toolkit";

export const Data = createSlice({
    name: "Data",
    initialState: {
        data: [
            {
                status: true,
                email: "uhbgvfh@gmail.com",
                id: "1"
            },
            {
                status: false,
                email: "nhjbf@gmail.com",
                id: "2"
            },
            {
                status: false,
                email: "nghgmfhjgfd@gmail.com",
                id: "3"
            }
        ]
    },
    reducers: {
    }
})

export default Data.reducer