import "./signUpScreen.scss";

function SignUpScreen() {
	const register = (e) => {
		e.preventDefault();
	}

	const signIn = (e) => {
		e.preventDefault();
	}

	return (
		<div className="signUpScreen">
			<form>
				<h1>Sign In</h1>
				<input type="email" placeholder="Email" />
				<input type="password" placeholder="Password" />
				<button type="submit" onClick={signIn}>Sign In</button>
				<h4>
					<span className="signUpScreen__gray">New to Netflix? </span>
					<span className="signUpScreen__link" onClick={register}>Sign Up Now.</span> 
				</h4>
			</form>
		</div>
	);
}

export default SignUpScreen;
