import React, { useState } from 'react';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import AppBar from "@mui/material/AppBar";
import { Container,
				 Stack,
				 TextField,
				 ToggleButtonGroup,
				 ToggleButton,
					Typography,
					Paper }
	from '@mui/material';
import LoadingButton from '@mui/material/Button';
import AccountCircle from '@mui/icons-material/AccountCircle';
import LockIcon from '@mui/icons-material/Lock';

export const App = () => {
	const [loginFormName, setLoginFormName] = useState<'login' | 'register'>('login');
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [isLoading, setIsLoading] = useState(false);

	const handleUserNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setUsername(e.target.value);
	};

	const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>,) => {
		setPassword(e.target.value);
	};

	const handleLoginFormChange = (_e: React.MouseEvent<HTMLElement>, newForm: 'login' | 'register') => {
		if (newForm) setLoginFormName(newForm);
	};

	const handleSubmit = () => {
		setIsLoading(true);
		setTimeout(() => {
			setIsLoading(false);
			console.log({ username, password, form: loginFormName });
		}, 2000);
	};

	return (
		<div>
			<AppBar />
			<Container maxWidth='sm' sx={{ paddingTop: '80px' }}>
				<Paper elevation={3} sx={{padding: 3}}>
				<Stack spacing={2}>
					<Typography variant={'h5'} gutterBottom>
						{loginFormName === 'login' ? 'Выход' : 'Регистрация'}
					</Typography>
					<ToggleButtonGroup
						value={loginFormName}
						exclusive
						onChange={handleLoginFormChange}
						disabled={isLoading}
						fullWidth
						size="small"
						>
						<ToggleButton value="login">Вход</ToggleButton>
						<ToggleButton value="register">Регистрация</ToggleButton>
					</ToggleButtonGroup>
					<TextField
						label="Email"
						type="email"
						value={username}
						onChange={handleUserNameChange}
						disabled={isLoading}
						slotProps={{input: {startAdornment: <AccountCircle />}}}
						variant="outlined"
						size="small"
					/>
					<TextField
						label="Пароль"
						type="password"
						value={password}
						onChange={handlePasswordChange}
						disabled={isLoading}
						slotProps={{ input: { startAdornment: <LockIcon />}}}
						size='small'
						variant="outlined"
					/>
					<LoadingButton
						onClick={handleSubmit}
						variant='contained'
						loading={isLoading}
						fullWidth
					>
						{loginFormName === 'login' ? 'Войти' : 'Зарегистрироваться'}
					</LoadingButton>
				</Stack>
				</Paper>
			</Container>
		</div>
	);
};

//export default App;
