import { useRef } from "react";

const InputUseRef = () => {
    let firstName = useRef();
    let lastName = useRef();
    

    const buttonClick = () => {
        let fName = firstName.current.value;
        let lName = lastName.current.value;
        alert(fName +" "+ lName);
    }

    return (
        <div>
            <input type="text" ref={firstName} name="" id="" />
            <input type="text" ref={lastName} name="" id="" />
            <button type='button' onClick={buttonClick}>Submit</button>
        </div>
    );
};

export default InputUseRef;