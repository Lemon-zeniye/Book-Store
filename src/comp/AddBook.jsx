import BookForm from "./BookForm";
import { db } from "../fireBaseConfig";
import { collection, addDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

// import ListOfBook from "./ListOfBook";

const AddBook = () => {

    const navigate = useNavigate();
    // add book to the firebase collection
    const onSubmitHandeler = async (book) => {
        console.log(book);
        const booksCollectonRef = collection(db, "Books");
        await addDoc(booksCollectonRef, book);
        navigate("/");    
    }

    
  return  (
    <>
        <BookForm onSubmitHandeler={onSubmitHandeler} />   
    </>
  )
}

export default AddBook