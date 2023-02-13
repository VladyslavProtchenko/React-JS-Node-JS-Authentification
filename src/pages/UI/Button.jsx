
//style
const button = 'bg-blue-700 px-4 py-2 rounded-xl self-start text-white font-bold active:bg-blue-500'

const Button = ({children, ...props}) => {

    return (
        <button className={button} {...props}>{children}</button>
    );
}

export default Button;
