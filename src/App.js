import './App.css';
import Homepage from './Layouts/homepage';
import { Routes, Route } from 'react-router-dom';
import CardsContainer from './components/CardsContainer';

import ProjectViewPage from './routes/ProjectViewPage';
import ProjectEditPage from './routes/ProjectEditPage';
import LoginSigninPage from './routes/LoginSigninPage';
import CreatePost from './components/CreatePost';
import CreateProject from './routes/CreateProject';

function App() {
	return (
		<div className="App">
			<Routes>
				<Route path="/"
				 element={<Homepage/>}>
					<Route path="/" element={<CardsContainer />} />
					<Route
						exact
						path="card/create"
						element={<CreateProject/>}
					/>
					<Route
						exact
						path="card/view/:projectKey"
						element={<ProjectViewPage />}
					/>
					<Route
						exact
						path="card/edit/:projectKey"
						element={<ProjectEditPage />}
					/>
				</Route>
				<Route path="/loginsignin" element={<LoginSigninPage />} />
			</Routes>
		</div>
	);
}

export default App;
