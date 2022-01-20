const Login = () => {
    

    function onClick1(ID){
        switch (ID) {
            case 0:
                console.log('google');
                console.log(process.env.REACT_APP_MY_API_KEY);
                break;
        
            case 1:
                console.log('facebook');
                break;

            case 2:
                console.log('twitter');
                break;
            
            case 3:
                console.log('guest');
                break;
            
        }
    }

    return (
        <div className="login">
            <div className="login-container">
                <input className="sign-in-button" type="submit" onClick={() =>onClick1(0)} value="Login"></input>
                <input className="sign-in-button" type="submit" onClick={() =>onClick1(0)} value="Register"></input>
                <input className="sign-in-button" type="submit" onClick={() =>onClick1(3)} value="Sign in as a guest"></input>
            </div>
        </div>
    )
}

export default Login
