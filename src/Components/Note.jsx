import React from "react";
import DeleteIcon from '@mui/icons-material/Delete';

function Note(props)
{
    return <div class="Note">
        <h1>{props.title}</h1>
        <p>{props.content}</p>

        <button onClick={()=>
        {
            props.onPress(props.id)
        }
        }><DeleteIcon /></button>
    </div>
}

export default Note;