import React, {useState} from "react";
import {useDispatch} from 'react-redux';
import FormData from 'form-data';
import axios from "axios";

function Upload(){

    const dispatch = useDispatch();
    const [selectedFile, setSelectedFile] = useState('');


    const handleUpload = (event) => {
        event.preventDefault();
        console.log('in handleUpload');

        let formData = new FormData();

        for (const file of selectedFile.files){
            formData.append('uploaded_file', file);
        }
        
        axios.post("/api/upload", formData)
            .then(res =>{
                console.log('in post axios client, res is', res);
                dispatch({
                    type: 'FETCH_SHELF'
                })
            })
            .catch(err =>{
                console.log('error in axios post client, error is', err);
            })

        // dispatch({
        //     type: 'UPLOAD_IMAGE',
        //     payload: selectedFile
        // })

    }

    const changeHandler = (event) => {
        console.log('in changeHandler');
        setSelectedFile({files: event.target.files});
    }

    console.log('in upload');
    return(
    
        <form onSubmit={handleUpload}>
        <input type="file" className="form-control-file" name="uploaded_file" onChange = {changeHandler} multiple/>
        {/* <input type="text" className="form-control" placeholder="description" name="description"/> */}
        <input type="submit" value="Upload" className="btn btn-default"/>            
        </form>
    
    );

}

export default Upload;
