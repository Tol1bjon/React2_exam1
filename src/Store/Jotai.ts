import { atom } from "jotai";

export const Todo = atom([
    {
        status: true,
        phone: "1234566789",
        id: "1"
    },
    {
        status: false,
        phone: "1234566789",
        id: "2"
    },
    {
        status: false,
        phone: "1234566789",
        id: "3"
    }
])

// export const deleteUser = (null, (get, set, id) => {
// })