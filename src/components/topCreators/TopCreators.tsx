import { useGetAllUsersQuery } from "../../redux/api/user-slice";
import Avatar from "../../assets/images/user.png";

const Users = () => {
  const { data = [] } = useGetAllUsersQuery(true);
  return (
    <>
      <h3 className="font-bold text-[24px] leading-[33.6px] text-white mb-4">
        Top Creators
      </h3>
      <div className="flex flex-wrap justify-between items-center users-wrapper">
        {data.length > 0
          ? data.map((user: any, ind: number) => (
              <div
                key={ind}
                className="user-card flex flex-col text-center items-center mb-4 py-[24px] px-[4px] border border-[#1F1F22] rounded-[20px] w-[190px]"
              >
                <img
                  src={Avatar}
                  alt="User image"
                  className="w-[54px] h-[54px] rounded-full mr-4"
                />
                <div>
                  <p className="text-white font-semibold">{user.username}</p>
                  <button className="text-white mt-[12px] bg-[rgba(135,126,255,1)] px-[18px] py-[6px] rounded-[8px]">
                    Follow
                  </button>
                </div>
              </div>
            ))
          : ""}
      </div>
    </>
  );
};

export default Users;
