const PropsWithObject = (props) => {
    return (
        <div>
            <ul>
                <li>Name: {props.item['name']}</li>
                <li>age: {props.item['age']}</li>
                <li>city: {props.item['city']}</li>
                <li>country: {props.item['country']}</li>
                <li>Address: Street,{props.item['address']['street']} </li>
            </ul>
        </div>
    );
};
export default PropsWithObject;