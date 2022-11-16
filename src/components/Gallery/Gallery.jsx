import React, {useState, useEffect} from "react";
import {useDispatch, useSelector} from 'react-redux';
import FormData from 'form-data';
import axios from "axios";

function Upload(){

    const dispatch = useDispatch();
    const [selectedFile, setSelectedFile] = useState('');

    const gallery = useSelector((store) => {
        return store.gallery;
    })

    const user = useSelector((store)=> {
        return store.user;
    })

    useEffect(() => {
        dispatch({
            type: 'FETCH_GALLERY'
        });
    }, []);


    const handleUpload = (event) => {
        event.preventDefault();
        console.log('in handleUpload');

        let formData = new FormData();

        for (const file of selectedFile.files){
            formData.append('uploaded_file', file);
        }
        
        axios.post("/api/gallery", formData)
            .then(res =>{
                console.log('in post axios client, res is', res);
                dispatch({
                    type: 'FETCH_GALLERY'
                });
            })
            .catch(err =>{
                console.log('error in axios post client, error is', err);
            })

    }

    const changeHandler = (event) => {
        console.log('in changeHandler');
        setSelectedFile({files: event.target.files});
    }

    const removeImage = (galleryItem) => {
        console.log('in removeImage');
        dispatch({
            type: 'REMOVE_IMAGE',
            payload: galleryItem.id
        })
    }

    return(

        <>
        <form onSubmit={handleUpload}>
        <input type="file" className="form-control-file" name="uploaded_file" onChange = {changeHandler} multiple/>
        {/* <input type="text" className="form-control" placeholder="description" name="description"/> */}
        <input type="submit" value="Upload" className="btn btn-default"/>            
        </form>

        <div>
            <h1>My Garden Gallery</h1>
            <table>
                <tbody>
                    {gallery.map(galleryItem => (
                        <tr key={galleryItem.id}>
                            <td><img src={galleryItem.image_url.replace("public/", "")}/></td>
                            <td>{user.id === galleryItem.user_id && 
                                <button onClick={() => removeImage(galleryItem)}>Remove</button>}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>

        </>


        
    
    );

}

export default Upload;
