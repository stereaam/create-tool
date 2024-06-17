import React, { useState } from "react";
import { Button, TextField, Typography, Container } from "@mui/material";
import styles from "./Login.module.scss";
function Login() {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log("Username:", username);
		console.log("Password:", password);
	};
	return (
		<div className={styles.loginContainer}>
			<div className={styles.titleWrapper}>
				<div className={styles.title}>CREATE</div>
				<span className={styles.description}>
					Embedding advanced urban material stock methods within governance
					processes to enable circular economy and cities resilience
				</span>
			</div>
			<div>
				<Container component="main">
					<div>
						<Typography component="h1" variant="h5">
							Login
						</Typography>
						<form onSubmit={handleSubmit}>
							<TextField
								variant="outlined"
								margin="normal"
								required
								fullWidth
								id="username"
								label="Username/Email"
								name="username/email"
								autoFocus
								value={username}
								onChange={(e) => setUsername(e.target.value)}
							/>
							<TextField
								variant="outlined"
								margin="normal"
								required
								fullWidth
								name="password"
								label="Password"
								type="password"
								id="password"
								autoComplete="current-password"
								value={password}
								onChange={(e) => setPassword(e.target.value)}
							/>
							<Button type="submit" variant="contained" color="primary">
								Sign-In
							</Button>
						</form>
					</div>
				</Container>
			</div>
		</div>
	);
}

export default Login;
