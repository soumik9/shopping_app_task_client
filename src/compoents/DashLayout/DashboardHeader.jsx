import { AiOutlineMenuFold, AiOutlineMenuUnfold } from "react-icons/ai";
import { MdLogout } from "react-icons/md";
import useAuthLogout from "../../hooks/useAuthLogout";

const DashboardHeader = ({ broken, setToggled, setCollapsed, toggled, collapsed }) => {

    const { logout } = useAuthLogout();

    return (
        <div className="h-[72px] bg-slate-300 w-full flex justify-between items-center px-10">

            <div>
                {broken ? (
                    <button className="sb-button" onClick={() => setToggled(!toggled)}>
                        Toggle
                    </button>
                ) : <button className="sb-button" onClick={() => setCollapsed(!collapsed)}>
                    {collapsed ? <AiOutlineMenuFold className="text-primary text-[24px]" /> : <AiOutlineMenuUnfold className="text-primary text-[24px]" />}
                </button>}
            </div>

            <div className="flex items-center gap-2">
                <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfyzTkEY3Uui9Tnb6aL9XX36iYGrQ_Fiy1KEn98K9ndNPXQCN5t7Tgr-7gl4szcWlhnzU&usqp=CAU"
                    alt=""
                    className="w-[50px] rounded-full"
                />

                <p>Soumik</p>

                <button
                    type="button"
                    onClick={() => logout()}
                >
                    <MdLogout />
                </button>
            </div>

        </div>
    )
}

export default DashboardHeader