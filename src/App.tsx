import React, { Suspense, lazy } from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import './App.scss'
import { Header } from './components/Header'

const Timer = lazy(() => import('./pages/Timer/Timer'))
const Palette = lazy(() => import('./pages/Palette/Palette'))
const StartPage = lazy(() => import('./pages/StartPage/StartPage'))
const App: React.FC = () => {
	return (
		<Router>
			<div>
				<Header />
				<Suspense>
					<Routes>
						<Route path='/testWork' element={<StartPage />} />
						<Route path='/timer' element={<Timer />} />
						<Route path='/palette' element={<Palette />} />
					</Routes>
				</Suspense>
			</div>
		</Router>
	)
}

export default App
