import React, {useState} from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";

function AddView(props) {
    const emptyForm = {
        id: null,
        title: '',
        subTitle: ''
    }

    const [formData, addFormData] = useState(emptyForm)

    const handleInputChange = event => {
        const {name, value} = event.target
  
       addFormData({...formData, [name]: value})
    }

    return (
        <div>
            <h1>Add a rubric</h1>
            <form type="submit" 
                onSubmit={event => {
                event.preventDefault()
                console.log('submitting form')
                console.log(formData)
                props.addRubric(formData)}}>

                <label>Title</label>
                <input
                    type="text"
                    name="title"
                    value={formData.title}
                    onChange={handleInputChange}/>

                <label>subTitle</label>
                <input
                    type="text"
                    name="subTitle"
                    value={formData.subTitle}
                    onChange={handleInputChange}/>

                <button type='submit' onClick={event => {
                event.preventDefault()
                console.log('submitting form')
                //console.log(formData)
                props.addRubric(formData)}}>
                    <Link to="/">Add</Link>
                </button>
                <button >
                    <Link to="/">Cancel</Link>
                </button>
            </form>
        </div>
    );
}

export default AddView;