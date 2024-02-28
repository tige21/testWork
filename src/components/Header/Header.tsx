import cn from 'classnames'
import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './Header.module.scss'
import { PALETTE, TIMER, TITLE } from '../../constants/header-constants'

const Header: React.FC = () => {
	return (
		<header className={styles.headerContainer}>
			<div className={styles.wrapper}>
				<div className={styles.title}>{TITLE}</div>
				<nav className={styles.nav}>
					<ul>
						<li>
							<NavLink
								to='/timer'
								className={({ isActive }) =>
									cn(styles.navLink, { [styles.active]: isActive })
								}
							>
								{TIMER}
							</NavLink>
						</li>
						<li>
							<NavLink
								to='/palette'
								className={({ isActive }) =>
									cn(styles.navLink, { [styles.active]: isActive })
								}
							>
								{PALETTE}
							</NavLink>
						</li>
					</ul>
				</nav>
			</div>
		</header>
	)
}

export default Header
