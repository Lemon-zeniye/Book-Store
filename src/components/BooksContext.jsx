import img1 from "../images/cover1.jpg";
import img2 from "../images/cover2.avif";
import img3 from "../images/cover3.jpg";
import img4 from "../images/cover4.jpg";
import img5 from "../images/cover5.jpg";
import img6 from "../images/cover6.jpg";
import img7 from "../images/cover7.jpg";
import img8 from "../images/cover8.png";
import img9 from "../images/cover9.jpg";
import img10 from "../images/cover10.jpg";
import img11 from "../images/cover11.jpg";
import img12 from "../images/cover12.jpg";
import img13 from "../images/cover13.gif";
import img14 from "../images/cover14.jpg";
import img15 from "../images/cover15.jpg";
import img16 from "../images/cover16.jpg";
import img17 from "../images/cover17.jpeg";
import img18 from "../images/cover18.jpeg";
import img19 from "../images/cover19.jpg";
import img20 from "../images/cover20.jpg";
import img21 from "../images/cover21.jpg";
import img22 from "../images/cover22.jpg";
import img23 from "../images/cover23.jpg";
import img24 from "../images/cover24.avif";
import {createContext,useEffect, useState} from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../fireBaseConfig";

const datas = [
    {
        id: 0,
        img: img1,
        title: "Legned of the Maraton Runner",
        decription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, recusandae corrupti cum officiis iste ratione placeat rem iusto. A modi repellat natus. Asperiores rem ea ex totam, aperiam officia nemo quas expedita, neque obcaecati fuga, sit aut fugit quisquam nisi est dolorum possimus earum pariatur?",
        price: 55 ,
        author: "Lebron Jemes",
        favorite: false,
        info: "popular",
        onCart: false,
        numOfBook: 1
    },
    {
        id: 1,
        img: img2,
        title: "Legned of the Maraton Runner",
        decription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, recusandae corrupti cum officiis iste ratione placeat rem iusto. A modi repellat natus. Asperiores rem ea ex totam, aperiam officia nemo quas expedita, neque obcaecati fuga, sit aut fugit quisquam nisi est dolorum possimus earum pariatur?",
        price:55 ,
        author: "Lebron Jemes",
        favorite: false,
        info: "popular",
        onCart: false,
        numOfBook: 1
    },
    {   
        id: 2,
        img: img3,
        title: "Legned of the Maraton Runner",
        decription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, recusandae corrupti cum officiis iste ratione placeat rem iusto. A modi repellat natus. Asperiores rem ea ex totam, aperiam officia nemo quas expedita, neque obcaecati fuga, sit aut fugit quisquam nisi est dolorum possimus earum pariatur?",
        price:55 ,
        author: "Lebron Jemes",
        favorite: false,
        info: "new",
        onCart: false,
        numOfBook: 1
    },
    {   
        id: 3,
        img: img4,
        title: "Legned of the Maraton Runner",
        decription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, recusandae corrupti cum officiis iste ratione placeat rem iusto. A modi repellat natus. Asperiores rem ea ex totam, aperiam officia nemo quas expedita, neque obcaecati fuga, sit aut fugit quisquam nisi est dolorum possimus earum pariatur?",
        price:55 ,
        author: "Lebron Jemes",
        favorite: false,
        info: "popular",
        onCart: false,
        numOfBook: 1
    },
    {
        id: 4,
        img: img5,
        title: "Legned of the Maraton Runner",
        decription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, recusandae corrupti cum officiis iste ratione placeat rem iusto. A modi repellat natus. Asperiores rem ea ex totam, aperiam officia nemo quas expedita, neque obcaecati fuga, sit aut fugit quisquam nisi est dolorum possimus earum pariatur?",
        price:55 ,
        author: "Lebron Jemes",
        favorite: false,
        info: "new",
        onCart: false,
        numOfBook: 1
    },
    {
        id: 5,
        img: img6,
        title: "Legned of the Maraton Runner",
        decription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, recusandae corrupti cum officiis iste ratione placeat rem iusto. A modi repellat natus. Asperiores rem ea ex totam, aperiam officia nemo quas expedita, neque obcaecati fuga, sit aut fugit quisquam nisi est dolorum possimus earum pariatur?",
        price:55 ,
        author: "Lebron Jemes",
        favorite: false,
        info: "new",
        onCart: false,
        numOfBook: 1
    },
    {
        id: 6,
        img: img7,
        title: "Legned of the Maraton Runner",
        decription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, recusandae corrupti cum officiis iste ratione placeat rem iusto. A modi repellat natus. Asperiores rem ea ex totam, aperiam officia nemo quas expedita, neque obcaecati fuga, sit aut fugit quisquam nisi est dolorum possimus earum pariatur?",
        price:55 ,
        author: "Lebron Jemes",
        favorite: false,
        info: "popular"
,
        onCart: false,
        numOfBook: 1
    },
    {
        id: 7,
        img: img8,
        title: "Legned of the Maraton Runner",
        decription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, recusandae corrupti cum officiis iste ratione placeat rem iusto. A modi repellat natus. Asperiores rem ea ex totam, aperiam officia nemo quas expedita, neque obcaecati fuga, sit aut fugit quisquam nisi est dolorum possimus earum pariatur?",
        price:55 ,
        author: "Lebron Jemes",
        favorite: false,
        info: "popular",
        onCart: false,
        numOfBook: 1
    },
    {   
        id: 8,
        img: img9,
        title: "Legned of the Maraton Runner",
        decription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, recusandae corrupti cum officiis iste ratione placeat rem iusto. A modi repellat natus. Asperiores rem ea ex totam, aperiam officia nemo quas expedita, neque obcaecati fuga, sit aut fugit quisquam nisi est dolorum possimus earum pariatur?",
        price:55 ,
        author: "Lebron Jemes",
        favorite: false,
        info: "popular",
        onCart: false,
        numOfBook: 1
    },
    {   
        id: 9,
        img: img10,
        title: "Legned of the Maraton Runner",
        decription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, recusandae corrupti cum officiis iste ratione placeat rem iusto. A modi repellat natus. Asperiores rem ea ex totam, aperiam officia nemo quas expedita, neque obcaecati fuga, sit aut fugit quisquam nisi est dolorum possimus earum pariatur?",
        price:55 ,
        author: "Lebron Jemes",
        favorite: false,
        info: "popular",
        onCart: false,
        numOfBook: 1
    },
    {
        id: 10,
        img: img11,
        title: "Legned of the Maraton Runner",
        decription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, recusandae corrupti cum officiis iste ratione placeat rem iusto. A modi repellat natus. Asperiores rem ea ex totam, aperiam officia nemo quas expedita, neque obcaecati fuga, sit aut fugit quisquam nisi est dolorum possimus earum pariatur?",
        price:55 ,
        author: "Lebron Jemes",
        favorite: false,
        info: "popular",
        onCart: false,
        numOfBook: 1
    },
    {
        id: 11,
        img: img12,
        title: "Legned of the Maraton Runner",
        decription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, recusandae corrupti cum officiis iste ratione placeat rem iusto. A modi repellat natus. Asperiores rem ea ex totam, aperiam officia nemo quas expedita, neque obcaecati fuga, sit aut fugit quisquam nisi est dolorum possimus earum pariatur?",
        price:55 ,
        author: "Lebron Jemes",
        favorite: false,
        info: "popular",
        onCart: false,
        numOfBook: 1
    },
    {
        id: 12,
        img: img13,
        title: "Legned of the Maraton Runner",
        decription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, recusandae corrupti cum officiis iste ratione placeat rem iusto. A modi repellat natus. Asperiores rem ea ex totam, aperiam officia nemo quas expedita, neque obcaecati fuga, sit aut fugit quisquam nisi est dolorum possimus earum pariatur?",
        price: 55 ,
        author: "Lebron Jemes",
        favorite: false,
        info: "best",
        onCart: false,
        numOfBook: 1
    },
    {
        id: 13,
        img: img14,
        title: "Legned of the Maraton Runner",
        decription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, recusandae corrupti cum officiis iste ratione placeat rem iusto. A modi repellat natus. Asperiores rem ea ex totam, aperiam officia nemo quas expedita, neque obcaecati fuga, sit aut fugit quisquam nisi est dolorum possimus earum pariatur?",
        price:55 ,
        author: "Lebron Jemes",
        favorite: false,
        info: "best",
        onCart: false,
        numOfBook: 1
    },
    {   
        id: 14,
        img: img15,
        title: "Legned of the Maraton Runner",
        decription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, recusandae corrupti cum officiis iste ratione placeat rem iusto. A modi repellat natus. Asperiores rem ea ex totam, aperiam officia nemo quas expedita, neque obcaecati fuga, sit aut fugit quisquam nisi est dolorum possimus earum pariatur?",
        price:55 ,
        author: "Lebron Jemes",
        favorite: false,
        info: "popular",
        onCart: false,
        numOfBook: 1
    },
    {   
        id: 15,
        img: img16,
        title: "Legned of the Maraton Runner",
        decription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, recusandae corrupti cum officiis iste ratione placeat rem iusto. A modi repellat natus. Asperiores rem ea ex totam, aperiam officia nemo quas expedita, neque obcaecati fuga, sit aut fugit quisquam nisi est dolorum possimus earum pariatur?",
        price:55 ,
        author: "Lebron Jemes",
        favorite: false,
        info: "best",
        onCart: false,
        numOfBook: 1
    },
    {
        id: 16,
        img: img17,
        title: "Legned of the Maraton Runner",
        decription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, recusandae corrupti cum officiis iste ratione placeat rem iusto. A modi repellat natus. Asperiores rem ea ex totam, aperiam officia nemo quas expedita, neque obcaecati fuga, sit aut fugit quisquam nisi est dolorum possimus earum pariatur?",
        price:55 ,
        author: "Lebron Jemes",
        favorite: false,
        info: "popular",
        onCart: false,
        numOfBook: 1
    },
    {
        id: 17,
        img: img18,
        title: "Legned of the Maraton Runner",
        decription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, recusandae corrupti cum officiis iste ratione placeat rem iusto. A modi repellat natus. Asperiores rem ea ex totam, aperiam officia nemo quas expedita, neque obcaecati fuga, sit aut fugit quisquam nisi est dolorum possimus earum pariatur?",
        price:55 ,
        author: "Lebron Jemes",
        favorite: false,
        info: "popular",
        onCart: false,
        numOfBook: 1
    },
    {
        id: 18,
        img: img19,
        title: "Legned of the Maraton Runner",
        decription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, recusandae corrupti cum officiis iste ratione placeat rem iusto. A modi repellat natus. Asperiores rem ea ex totam, aperiam officia nemo quas expedita, neque obcaecati fuga, sit aut fugit quisquam nisi est dolorum possimus earum pariatur?",
        price:55 ,
        author: "Lebron Jemes",
        favorite: false,
        info: "best"
,
        onCart: false,
        numOfBook: 1
    },
    {
        id: 19,
        img: img20,
        title: "Legned of the Maraton Runner",
        decription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, recusandae corrupti cum officiis iste ratione placeat rem iusto. A modi repellat natus. Asperiores rem ea ex totam, aperiam officia nemo quas expedita, neque obcaecati fuga, sit aut fugit quisquam nisi est dolorum possimus earum pariatur?",
        price:55 ,
        author: "Lebron Jemes",
        favorite: false,
        info: "best",
        onCart: false,
        numOfBook: 1
    },
    {   
        id: 20,
        img: img21,
        title: "Legned of the Maraton Runner",
        decription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, recusandae corrupti cum officiis iste ratione placeat rem iusto. A modi repellat natus. Asperiores rem ea ex totam, aperiam officia nemo quas expedita, neque obcaecati fuga, sit aut fugit quisquam nisi est dolorum possimus earum pariatur?",
        price:55 ,
        author: "Lebron Jemes",
        favorite: false,
        info: "best",
        onCart: false,
        numOfBook: 1
    },
    {   
        id: 21,
        img: img22,
        title: "Legned of the Maraton Runner",
        decription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, recusandae corrupti cum officiis iste ratione placeat rem iusto. A modi repellat natus. Asperiores rem ea ex totam, aperiam officia nemo quas expedita, neque obcaecati fuga, sit aut fugit quisquam nisi est dolorum possimus earum pariatur?",
        price:55 ,
        author: "Lebron Jemes",
        favorite: false,
        info: "new",
        onCart: false,
        numOfBook: 1
    },
    {
        id: 22,
        img: img23,
        title: "Legned of the Maraton Runner",
        decription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, recusandae corrupti cum officiis iste ratione placeat rem iusto. A modi repellat natus. Asperiores rem ea ex totam, aperiam officia nemo quas expedita, neque obcaecati fuga, sit aut fugit quisquam nisi est dolorum possimus earum pariatur?",
        price:55 ,
        author: "Lebron Jemes",
        favorite: false,
        info: "new",
        onCart: false,
        numOfBook: 1
    },
    {
        id: 23,
        img: img24,
        title: "Legned of the Maraton Runner",
        decription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, recusandae corrupti cum officiis iste ratione placeat rem iusto. A modi repellat natus. Asperiores rem ea ex totam, aperiam officia nemo quas expedita, neque obcaecati fuga, sit aut fugit quisquam nisi est dolorum possimus earum pariatur?",
        price:55 ,
        author: "Lebron Jemes",
        favorite: false,
        info: "new",
        onCart: false,
        numOfBook: 1
    }];



export const BooksContext = createContext();


export const BooksProvider = (props) => {
const [books, setBooks] = useState([]);
const booksCollectonRef = collection(db, "Books");
useEffect(() => {
    const getBooks = async () => {
        const data = await getDocs(booksCollectonRef);
        setBooks(data.docs.map(doc => ({...doc.data(), id: doc.id})));
    }
    getBooks();
},[]);

    return(
        <BooksContext.Provider value = {[books, setBooks]}>
            {props.children}
        </BooksContext.Provider>
    )
}