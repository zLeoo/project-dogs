
const Error = ({error}) => {
    if(!error) return null;
    return <p style={{color: '#f32', margin: '1rem 0'}}>{error}</p>
} 

export default Error;