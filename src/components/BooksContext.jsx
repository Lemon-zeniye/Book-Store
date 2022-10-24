import {createContext,useEffect, useState} from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../fireBaseConfig";

export const BooksContext = createContext();

export const BooksProvider = (props) => {
const [books, setBooks] = useState([]);
const booksCollectonRef = collection(db, "Books");
useEffect(() => {
    const getBooks = async () => {
        const data = await getDocs(booksCollectonRef);
        setBooks(data.docs.map(doc => ({...doc.data(), id: doc.id})));
    }
    getBooks()
},[]);

    return(
        <BooksContext.Provider value = {[books, setBooks]}>
            {props.children}
        </BooksContext.Provider>
    )
}