import Header from "../../components/common/Header"
import ConnectedAccount from "../../components/setting/ConnectedAccount"
import Notification from "../../components/setting/Notification"
import Profile from "../../components/setting/Profile"
import Security from "../../components/setting/Security"

const SettingPage = () => {
  return (
    <div className="flex-1 overflow-x-auto relative z-10">
        <Header title="Setting" />
        <main className="max-w-4xl mx-auto py-6 px-4">
            <Profile />
            <Notification />
            <Security />
            <ConnectedAccount />
        </main>
    </div>
  )
}

export default SettingPage