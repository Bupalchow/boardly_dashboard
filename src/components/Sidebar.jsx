import { AiOutlineHome, AiOutlineSchedule, AiOutlineTeam, AiOutlineUser } from 'react-icons/ai';
import { motion } from 'framer-motion';

const SidebarItem = ({ icon: Icon, isActive }) => {
    return (
        <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className={`p-3 rounded-lg cursor-pointer ${
                isActive ? 'bg-orange-100 text-orange-500' : 'text-gray-500 hover:bg-gray-100'
            }`}
        >
            <Icon size={24} />
        </motion.div>
    );
};

export const Sidebar = () => {
    return (
        <div>
            <div className='h-16 top-0 fixed bg-white left-0 w-16  '></div>
            <div className="fixed left-0 top-16 h-[calc(100%-4rem)] w-16 bg-white shadow-lg flex flex-col items-center py-4 space-y-6">
                <SidebarItem icon={AiOutlineHome} isActive={true} />
                <SidebarItem icon={AiOutlineSchedule} isActive={false} />
                <SidebarItem icon={AiOutlineTeam} isActive={false} />
                <SidebarItem icon={AiOutlineUser} isActive={false} />
            </div>
        </div>
    );
};