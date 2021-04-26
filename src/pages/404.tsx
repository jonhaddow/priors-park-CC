import { useEffect } from "react";
import { navigate } from "@reach/router";

export default (): null => {
	useEffect(() => {
		// Redirect to home page
		void navigate("/");
	}, []);
	return null;
};
