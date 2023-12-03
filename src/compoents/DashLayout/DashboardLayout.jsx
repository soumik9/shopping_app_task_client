import { useState } from 'react';
import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar';
import { Link, useLocation } from 'react-router-dom'
import { menuItems } from '../../config/constants';
import DashboardHeader from './DashboardHeader';

const DashboardLayout = ({ children, title }) => {

    // global
    const location = useLocation();

    // states
    const [collapsed, setCollapsed] = useState(false);
    const [toggled, setToggled] = useState(false);
    const [broken, setBroken] = useState(window.matchMedia('(max-width: 800px)').matches);

    return (
        <div style={{ display: 'flex', height: '100%', minHeight: '400px' }}>
            <Sidebar
                collapsed={collapsed}
                toggled={toggled}
                customBreakPoint="800px"
                onBreakPoint={setBroken}
                onBackdropClick={() => setCollapsed(false)}
                image="https://i.pinimg.com/736x/8e/6c/06/8e6c064f57f94838263d7ba9ad80f353.jpg"
                className='h-screen'
            >

                <div className='flex justify-center items-center h-[70px]'>
                    <Link to='/'><h1 className='text-primary text-[24px] font-medium'>
                        {!collapsed ? 'Shopping App' : 'SA'}
                    </h1></Link>
                </div>

                <Menu
                    menuItemStyles={{
                        button: ({ level, active }) => {
                            if (level === 0)
                                return {
                                    backgroundColor: active ? '#323676' : 'inherit',
                                    color: active ? 'white' : 'black'
                                };
                        },
                    }}
                >
                    {menuItems.map((item, index) => (
                        <MenuItem
                            key={index}
                            component={<Link to={item.to} />}
                            icon={item.icon}
                            active={
                                item.to === location.pathname ||
                                item.to === '/user' && (location.pathname === '/user/add' || location.pathname.slice(0, 11) === '/user/edit/') ||
                                item.to === '/item' && (location.pathname === '/item/add' || location.pathname.slice(0, 11) === '/item/edit/')
                            }
                        >
                            {item.text}
                        </MenuItem>
                    ))}
                </Menu>
            </Sidebar>

            <main className='w-full bg-gray-200'>
                <DashboardHeader
                    broken={broken}
                    toggled={toggled}
                    setToggled={setToggled}
                    collapsed={collapsed}
                    setCollapsed={setCollapsed}
                />

                <div className='mt-8 px-5'>
                    <div className='bg-white p-10 rounded-sm'>

                        <h2 className='text-[20px] text-primary'>{title}</h2>

                        <div className='mt-2'>
                            {children}
                        </div>

                    </div>

                </div>

            </main>
        </div>
    )
}

export default DashboardLayout