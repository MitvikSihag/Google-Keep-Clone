import React, {useState} from "react";
import AddIcon from '@mui/icons-material/Add';
// import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';

function Input(props)
{
    const[temp, setTemp] = useState(
        {
            title: "",
            content: ""
        }
    )

    const[isExpanded, setExpanded] = useState(false);

    const [flg, setFlg] = useState(false);

    function expand()
    {
        setExpanded(true);
    }

    function handleChange(event)
    {
        const {name, value} = event.target;

        setTemp((prevValue) =>
        {
            return{
            ...prevValue,
            [name]: value
            }
            
        })

        if(temp.title !== "" && temp.content !== "") setFlg(true);
        else setFlg(false);

    }
    return <div class="Input">
        <form>
            {isExpanded && <input onChange={handleChange} name="title" type="text" placeholder="Title" value={temp.title}/>}
            <textarea onClick={expand} onChange={handleChange} name="content" placeholder="Take a note..." value={temp.content} rows = {isExpanded ? 3:1}></textarea>
            <Zoom in={isExpanded}>
            <button disabled = {!flg}
            onClick = {(event) =>
                {
                    props.onclick(temp);
                    setTemp({
                        title: "", 
                        content: ""
                    });

                    event.preventDefault();
                    setFlg(false);

                }
            }

            ><AddIcon /></button></Zoom>

        </form>
    </div>
}

export default Input;