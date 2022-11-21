

function EditNote({plantClicked}) {
    console.log('in EditNote');



    const handleEditNote = () => {
        event.preventDefault();
        console.log('in handleEditNote');
        dispatch ({
            type: 'EDIT_NOTE',
            payload: plantClicked
        })
        setPlantClicked('');
    }

    console.log('in EditNote');
    return(
    <>
    <form onSubmit = {handleEditNote}>
        <input type="text" placeholder = "Add notes here!"/>
        <button type="submit">Save</button>
    </form>
    </>);
}

export default EditNote;