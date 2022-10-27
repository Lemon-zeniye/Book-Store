// import {createContext, useState, useEffect} from "react";
// import { collection, getDocs } from "firebase/firestore";
// import { db } from "../fireBaseConfig";

// export const BooksContext = createContext();

// export const BooksProvider = (props) => {
// const [books, setBooks] = useState([]);
// const booksCollectonRef = collection(db, "BookTwo");
// useEffect(() => {
//     const getBooks = async () => {
//       try{
//         const data = await getDocs(booksCollectonRef);
//         if(data){
//             setBooks(data.docs.map(doc => ({...doc.data(), id: doc.id})));
//         } else{
//             console.log('Documents do not exist!')
//         }
//       }catch(error){
//          console.log(error);
//       }
//     }
//     getBooks()
// },[]);

//     return(
//         <BooksContext.Provider value = {[books, setBooks]}>
//             {props.children}
//         </BooksContext.Provider>
//     )
// }