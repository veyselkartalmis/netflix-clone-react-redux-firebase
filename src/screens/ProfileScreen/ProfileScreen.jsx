import { useSelector } from "react-redux";
import Navbar from "../../components/Navbar/Navbar";
import { selectUser } from "../../features/userSlice";
import { auth } from "../../firebase";
import PlansScreen from "../PlansScreen/PlansScreen";
import "./profileScreen.scss";

function ProfileScreen() {
	const user = useSelector(selectUser);

	return (
		<div className="profileScreen">
			<Navbar />
			<div className="profileScreen__body">
				<h1>Edit Profile</h1>
				<div className="profileScreen__info">
					<img
						src="https://avatars.githubusercontent.com/u/6759280?v=4"
						alt="user"
					/>
					<div className="profileScreen__details">
						<h2>{user.email}</h2>
						<div className="profileScreen__plans">
							<h3>Plans</h3>
							<PlansScreenen />
							<button className="signOut" onClick={() => auth.signOut()}>
								Sign Out
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default ProfileScreen;
