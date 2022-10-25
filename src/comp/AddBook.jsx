import { useState } from "react";
// import { db } from "../fireBaseConfig";
// import { collection, addDoc, doc, getDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import NewAddBook from "./NewAddBook";
// import { useParams } from "react-router-dom";

// import ListOfBook from "./ListOfBook";

const AddBook = () => {
    // const [bookk, setBook] = useState([]);
    const navigate = useNavigate();
    // add book to the firebase collection
    const onSubmitHandeler = async (book) => {
        // const booksCollectonRef = collection(db, "Books");
        // await addDoc(booksCollectonRef, book);
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
    // const { id } = useParams()
        // const docRef = doc(db, "Books", id);
        // useEffect(() => {
        //     if(id){
        //         const getDataById = async () => {
        //             try {
        //                 const docSnap = await getDoc(docRef);
        //                 if(docSnap.exists()){
        //                     setBook(docSnap.data());
        //                 }else{
        //                     console.log("Document dose not eists");
        //                 }
        //             }catch(err){
        //                 console.log(err);
        //             }
        //         }
        //         getDataById();
        //     }
        // },[]);
  return  (
  <>
    <NewAddBook onSubmitHandeler={onSubmitHandeler}  authors={authors} setAuthor={setAuthor} IncreasAuthor={IncreasAuthor} RemoveAuthor={RemoveAuthor}  />
  </>
  )
}

export default AddBook