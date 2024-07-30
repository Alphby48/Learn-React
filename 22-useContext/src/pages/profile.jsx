import { useLogin } from "../hooks/useLogin";
import Navbar from "../components/Layouts/navbar";
const ProfilePage = () => {
  const username = useLogin();
  return (
    <>
      <Navbar></Navbar>
      <div>
        <h1>profile pages</h1>
        <p>username {username}</p>
      </div>
    </>
  );
};
export default ProfilePage;
