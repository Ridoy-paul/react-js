const City = () => {
    const city = ['Dhaka', 'Comilla', 'London', 'New York', 'Delhi'];
    return (
        <div>
            <ul>
                {
                    city.map((item, i) => {
                        return <li key={i}>{item}</li>
                    })
                }
            </ul>
        </div>
    );
};

export default City;