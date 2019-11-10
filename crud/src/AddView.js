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
            <form
                onSubmit={event => {
                event.preventDefault()

                props.addRubric(formData)
                addFormData(emptyForm)
            }}>

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

                <button>
                    <Link to="/">Add</Link>
                </button>
                <button>
                    <Link to="/">Cancel</Link>
                </button>
            </form>
        </div>
    );
}

export default AddView;