import { User } from "lucide-react"
import SettingSection from "./SettingSection"

const Profile = () => {
  return (
    <SettingSection icon={User} title="Profile">
      <div className="flex flex-col sm:flex-row mb-5">
        <img src="face.jpg" className="rounded-full w-20 h-20 object-cover sm:mx-2" alt="Profile" />
        <div className="sm:mx-2">
          <h3 className="text-lg text-gray-200">John Doe</h3>
          <p className="text-lg text-gray-200">John.Doe@gmail.com</p>
        </div>
      </div>
      <button className="px-2 sm:px-6 py-2 rounded-lg bg-indigo-600 text-white mt-1">
        Edit Profile
      </button>
    </SettingSection>
  )
}

export default Profile
