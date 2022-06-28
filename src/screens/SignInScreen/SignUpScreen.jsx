import { useRef } from "react";
import { auth } from "../../firebase";
import "./signUpScreen.scss";

function SignUpScreen() {
	const emailRef = useRef(null);
	const passwordRef = useRef(null);

	const register = (e) => {
		e.preventDefault();

		
	};

	const signIn = (e) => {
		e.preventDefault();
	};

	return (
		<div className="signUpScreen">
			<form>
				<h1>Sign In</h1>
				<input ref={emailRef} type="email" placeholder="Email" />
				<input ref={passwordRef} type="password" placeholder="Password" />
				<button type="submit" onClick={signIn}>
					Sign In
				</button>
				<h4>
					<span className="signUpScreen__gray">New to Netflix? </span>
					<span className="signUpScreen__link" onClick={register}>
						Sign Up Now.
					</span>
				</h4>
			</form>
		</div>
	);
}

export default SignUpScreen;
