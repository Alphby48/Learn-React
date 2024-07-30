import { useLogin } from "../hooks/useLogin";

const ProfilePage = () => {
  const username = useLogin();
  return (
    <div>
      <h1>profile pages</h1>
    </div>
  );
};
export default ProfilePage;
