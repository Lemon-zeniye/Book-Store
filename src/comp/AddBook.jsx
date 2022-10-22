import { useState } from "react";
import { db } from "../fireBaseConfig";
import { collection, addDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import NewAddBook from "./NewAddBook";

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
    const [authors, setAuthor] = useState([1]);
    const IncreasAuthor = (num) => {
        if(authors.length < 5){
          setAuthor((p) => [...p,num]);
        }
    }
    const RemoveAuthor = (nums) => {
      console.log(nums)
        if(authors.length > 1){
          const newArr = nums.pop();
          setAuthor(newArr);
        }
    }
  return  (
  <>
    <NewAddBook onSubmitHandeler={onSubmitHandeler}  authors={authors} setAuthor={setAuthor} IncreasAuthor={IncreasAuthor} RemoveAuthor={RemoveAuthor} />
  </>
  )
}

export default AddBook