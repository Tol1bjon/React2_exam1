import { data } from 'react-router'
import { create } from 'zustand'

export const useData = create((set) => ({
    data: [
        {
            name: "Kenja",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRs93_FqStEMDy5FyAEgcxglj0LPwXl5H3ISozJ7P9SKw&s=10",
            id: "1"
        },
        {
            name: "Tolibjon",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRs93_FqStEMDy5FyAEgcxglj0LPwXl5H3ISozJ7P9SKw&s=10",
            id: "2"
        },
        {
            name: "Abdurahmon",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRs93_FqStEMDy5FyAEgcxglj0LPwXl5H3ISozJ7P9SKw&s=10",
            id: "3"
        }
    ],

    deleteUser: (id) => ((state) => ({ data: state.data.filter((user) => user.id != id) }))
}))
