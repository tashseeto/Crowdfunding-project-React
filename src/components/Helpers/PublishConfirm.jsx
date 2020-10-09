import React, { useState } from "react"
// import { useHistory } from "react-router-dom"


// Button to confirm whether the person wants to delete the project
function PublishConfirm(props) {

    //variables
    const { id } = props
    const [publishConfirm, setPublishConfirm] = useState(false)
    // const history = useHistory();

    //publish button
    const publishProject = async (e) => {
        e.preventDefault();
        let token = window.localStorage.getItem("token");
    
        const response = await fetch(`${process.env.REACT_APP_API_URL}project/${id}/publish/`, {
            method: "post",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Token ${token}`,
            },
        });

        console.log(response)
        window.location.reload();
        return response.json();
    }


    return (
        <div>
            <button className="btn" onClick={() => {setPublishConfirm(true)}}>Publish</button> 
            {publishConfirm && <p >Are you sure you want to publish this? You won't be able to edit it once it is published</p>}            
            {publishConfirm && <button className="btn-50" onClick={publishProject}>Confirm</button>}
            {publishConfirm && <button className="btn-50" onClick={() => {setPublishConfirm(false)}}>Cancel</button>}
        </div>
    )

}


export default PublishConfirm