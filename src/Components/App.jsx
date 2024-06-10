import React, {useState} from "react";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import Note from "./Note.jsx";
import Input from "./Input.jsx";

function App()
{
    const[arr, setArr] = useState([]);

    function AddNote(noteName)
    {
        setArr((prevArr)=>
        {
            return [
                ...prevArr, noteName
            ];
        })
    }

    function delNote(id)
    {
        setArr((prevValue)=>
        {
            return prevValue.filter((value, index) =>
            {
                return index !== id;
            })
        })
    }

    return <div>
        <Header />
        <Input 
        onclick = {AddNote}
        />
        {arr.map((currArr, index)=>
        {
            return(
            <Note 
            key = {index}
            id= {index}
            title = {currArr.title}
            content = {currArr.content}
            onPress={delNote}
            />
            )
        })}
        <Footer />
    </div>
}

export default App;
