import React, {useState, useEffect} from "react";
import {useDispatch, useSelector} from 'react-redux';
import FormData from 'form-data';
import axios from "axios";
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import swal from 'sweetalert';



function Upload(){

    const dispatch = useDispatch();
    const [selectedFile, setSelectedFile] = useState('');
    const [description, setDescription] = useState('');

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
            formData.append('description', description);
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

    const fileChangeHandler = (event) => {
        setSelectedFile({files: event.target.files});
    
    }

    const descriptionChangeHandler = (event) => {
        setDescription(event.target.value);

    }

    const removeImage = (galleryItem) => {
        console.log('in removeImage');
    
        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this photo!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
          })
          .then((willDelete) => {
            if (willDelete) {
                dispatch({
                    type:'REMOVE_IMAGE',
                    payload: galleryItem.id
                })
              swal("Poof! Your photo has been deleted!", {
                icon: "success",
              });
            } else {
              swal("Your photo was saved!");
            }
          });
    
    }

    const gallery = useSelector((store) => {
        return store.gallery;
    })
    

    return(

        <>
        <form onSubmit={handleUpload}>
        <input type="file" className="form-control-file" name="uploaded_file" onChange = {fileChangeHandler}/>
        <input type="text" className="form-control" placeholder="description" name="description" onChange = {descriptionChangeHandler}/>
        <input type="submit" value="Upload" className="btn btn-default"/>            
        </form>

        <div>
            <h1>My Garden Gallery</h1>
            <table>
                <tbody>
                    {gallery.map(galleryItem => (
                        <tr key={galleryItem.id}>
                            <td><img src={galleryItem.image_url.replace("public/", "")}/></td>
                            <td>{galleryItem.description}</td>
                            {/* Only allow remove button to appear if user who uploaded the photo is logged in */}
                            <td>{user.id === galleryItem.user_id && 
                                <IconButton onClick = {() => removeImage(galleryItem)} size ="large" aria-label="add to favorites">
                                <DeleteIcon />
                                </IconButton>}
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
