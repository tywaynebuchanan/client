import React, {useState} from "react"
import {useSelector} from "react-redux"
import {userMenu, adminMenu} from "./menus"
import {Link, useNavigate} from "react-router-dom"
import {message} from "antd"
import Logo from "../assets/logo-black.png"

const DefaultLayout = ({children}) => {
	const navigate = useNavigate()
	const Logout = () => {
		localStorage.removeItem("token")
		message.success("You have been logged out")
		navigate("/login")
	}
	const [show, setShow] = useState(false)
	const menuToggle = () => {
		setShow(!show)
	}
	const {user} = useSelector(state => state.users)
	const menutoShow = user.role === 'admin' ? adminMenu : userMenu
	return (
		<div className='layout'>
			<div className='sidebar'>
				<div className='menu'>
					{menutoShow.map((item, index) => {
						const isActive = window.location.pathname === item.path
						return (
							<div
								className={`menu-item ${isActive ? "active-menu-item" : ""}`}
								key={index}>
								{item.icon}
								{!show && (
									<h1
										className='text-white text-sm'
										onClick={() => navigate(item.path)}>
										{item.title}
									</h1>
								)}
							</div>
						)
					})}
				</div>
			</div>
			<div className='body'>
				<div className='header flex justify-between items-center'>
					<div className='text-white' onClick={() => menuToggle()}>
						{show && <i className='ri-close-line'></i>}
						{!show && <i className='ri-menu-line'></i>}
					</div>
					<div className='login-logo'>
						<img src={Logo} alt='Brynks Logo' className='logo' />
					</div>
					<div className='flex justify-between gap-1 text-white'>
						<i className='ri-user-3-line' onClick={()=>navigate("/profile")}></i>
						<h1 className='text-lg'>
							{user.firstName} {user.lastName}
						</h1>
						<i className='ri-logout-box-r-line'></i>
						<h1 className='text-lg on-hover' onClick={Logout}>
							Logout
						</h1>
					</div>
				</div>
				<div className='content'>{children}</div>
			</div>
		</div>
	)
}

export default DefaultLayout
