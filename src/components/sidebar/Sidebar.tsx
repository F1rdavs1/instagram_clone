import { NavLink } from "react-router-dom";
import SnapGramIcon from "../../assets/images/snapgramIcon.svg";
import { useGetUserQuery } from "../../redux/api/user-slice";
import NavbarHome from "../../assets/images/home-icon.svg";
import NavbarExplore from "../../assets/images/Explore.svg";
import NavbarPeople from "../../assets/images/People.svg";
import NavbarSaved from "../../assets/images/Saved.svg";
import Avatar from "../../assets/images/user.png";
import NavbarReels from "../../assets/images/Reels.svg";
import NavbarChats from "../../assets/images/chats.svg";
import NavbarCreatePost from "../../assets/images/CreatePost.svg";
import NavbarLogOut from "../../assets/images/Logout.svg";
import NavbarSettings from "../../assets/images/Settings.svg";
import { Modal } from "antd";
import { useState } from "react";

const Sidebar = () => {
  const userData = JSON.parse(localStorage.getItem("userData") || "{}");
  const username = userData?.username || "";
  const { data } = useGetUserQuery(username);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
    localStorage.removeItem("token");
    window.location.reload();
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <div className="bg-[#09090A] h-[100vh] overflow-y-auto sidebar pb-[40px]">
        <div className="flex items-center gap-[8px] pt-[48px] pl-[16px]">
          <img src={SnapGramIcon} alt="Snapgram" className="" />
          <h2 className="font-bold text-[28px] leading-[36px] text-white">
            Snapgram
          </h2>
        </div>
        <div className="flex items-center gap-[5px] py-[44px] pl-[16px]">
          <img
            className="w-[56px] h-[56px] rounded-[50%]"
            src={Avatar}
            alt="Avatar"
            width={56}
            height={56}
          />
          <div className="">
            <h3 className="text-white font-bold text-[24px] pt-[20px]">
              {data?.fullName}
            </h3>
            <h3 className="text-slate-400 font-bold text-[16px]">
              {data?.username}
            </h3>
          </div>
        </div>
        <div className="space-y-[20px] mx-[20px]">
          <NavLink
            to={"/"}
            className={
              "text-white flex items-center gap-[16px] py-[15px] pl-[16px]  rounded-md"
            }
          >
            <img src={NavbarHome} alt="Home icon" />
            Home
          </NavLink>
          <NavLink
            to={"/explore"}
            className={
              "text-white flex items-center gap-[16px] py-[15px] pl-[16px]  rounded-md"
            }
          >
            <img src={NavbarExplore} alt="Explore" />
            Explore
          </NavLink>
          <NavLink
            to={"/people"}
            className={
              "text-white flex items-center gap-[16px] py-[15px] pl-[16px]  rounded-md"
            }
          >
            <img src={NavbarPeople} alt="People" />
            Explore
          </NavLink>
          <NavLink
            to={"/saved"}
            className={
              "text-white flex items-center gap-[16px] py-[15px] pl-[16px]  rounded-md"
            }
          >
            <img src={NavbarSaved} alt="Saved" />
            Saved
          </NavLink>
          <NavLink
            to={"/reels"}
            className={
              "text-white flex items-center gap-[16px] py-[15px] pl-[16px]  rounded-md"
            }
          >
            <img src={NavbarReels} alt="Reels" />
            Reels
          </NavLink>
          <NavLink
            to={"/chats"}
            className={
              "text-white flex items-center gap-[16px] py-[15px] pl-[16px]  rounded-md"
            }
          >
            <img src={NavbarChats} alt="Chats" />
            Chats
          </NavLink>
          <NavLink
            to={"/create-post"}
            className={
              "text-white flex items-center gap-[16px] py-[15px] pl-[16px]  rounded-md"
            }
          >
            <img src={NavbarCreatePost} alt="Create Post" />
            Create Post
          </NavLink>

          <button
            onClick={showModal}
            className="logout-button text-white flex items-center gap-[16px] py-[15px] pl-[16px]  rounded-md"
          >
            <img src={NavbarLogOut} alt="Logout" />
            Log Out
          </button>
          <NavLink
            to={"/settings"}
            className={
              "text-white flex items-center gap-[16px] py-[15px] pl-[16px]  rounded-md"
            }
          >
            <img src={NavbarSettings} alt="Create Post" />
            Settings
          </NavLink>
        </div>
      </div>

      <Modal
        title="Log Out"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        okText="Yes"
        cancelText="No"
      >
        <p>Are you sure you want to log out?</p>
      </Modal>
    </>
  );
};

export default Sidebar;
