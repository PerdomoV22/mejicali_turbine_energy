const StepCircle = ({ number, description }) => {
    return (
        <div className="step-circle">
            <div className="circle">{number}</div>
            <p>{description}</p>
        </div>
    );
};

export default StepCircle;