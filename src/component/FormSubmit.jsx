import React from 'react';

const FormSubmit = () => {

    function postFormData(e) {
        e.preventDefault();
    }

    return (
        <div>
            <form onSubmit={postFormData}>
                <input type="text" name="name" placeholder="Enter your name" /><br/><br/>
                <input type="text" name="email" placeholder="Enter your email" /><br/><br/>
                <input type="text" name="phone" placeholder="Enter your phone" /><br/><br/>
                <input type="text" name="message" placeholder="Enter your message" /><br/><br/>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default FormSubmit;