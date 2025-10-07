// import type { Dispatch, SetStateAction } from "react"
// import type { User } from "../shared/user.types"

// export const useGetUsers = async (setState: Dispatch<SetStateAction<User[] | null>>) => {
//     await fetch("/users.json")
//         .then(responce => responce.json())
//         .then(data => setState(data))
//         .catch(err => console.error(err))
// }