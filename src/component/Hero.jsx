const Hero = () => {
    let marks = 55;
    return (
        <div>
            {(()=>{
                return marks;
            })()}
        </div>
    );
};

export default Hero;
