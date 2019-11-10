import React, {useState}from 'react'
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";


function EditItemView(props) {
    console.log("props")
    console.log(props)
console.log(props.target)

const [formData, addFormData] = useState(props.target)

const handleInputChange = event => {
    const {name, value} = event.target

   addFormData({...formData, [name]: value})
}

    return (
        <div className="EditItemView">
            <h1>Edit {props.target.title}</h1>
           
            <form type="submit" >

                <label>Title</label>
                <input
                    type="text"
                    name="title"
                    //defaultValue={props.target.title}
                    value={formData.title}
                    onChange={handleInputChange}
                    />

                <label>subTitle</label>
                <input
                    type="text"
                    name="subTitle"
                    //defaultValue={props.target.subTitle}
                    value={formData.subTitle}
                    onChange={handleInputChange}
                    />

                <button type='submit' onClick={event => {
                event.preventDefault()
                console.log('submitting form');
                //console.log(formData)
                props.addRubric(formData);}}>
                    <Link to="/">Add Edit</Link>
                </button>
            </form>
        </div>
    );
}

export default EditItemView;