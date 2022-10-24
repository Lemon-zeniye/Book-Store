import React from 'react';
import BookForm from './BookForm';
import { useEffect, useState } from 'react';
import { updateDoc,getDoc, doc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { db } from "../fireBaseConfig";
import { useParams } from "react-router-dom";


const  UpdateBook = () => {
    const navigate = useNavigate();
    const par = useParams();
    const [book, setBook] = useState([]);

// update a book
    const updateBook = async (book) => {
        const preBook = doc(db, "Books", par.id);
        await updateDoc(preBook, book);
        navigate("/");    
    }      

    // to get a single book by id to prefill the input filed
    const docRef = doc(db, "Books", par.id);
    useEffect(() => {
        const getDataById = async () => {
            try {
                const docSnap = await getDoc(docRef);
                if(docSnap.exists()){
                    setBook(await docSnap.data());
                }else{
                    console.log("Document dose not eists");
                }
            }catch(err){
                console.log(err);
            }
        }
        getDataById();
    },[docRef]);
  return (
    <div>
         <BookForm id={par.id} book={book} updateBook={updateBook} />
    </div>
  )
}

export default UpdateBook