import { useState } from "react"
import SettingSection from "./SettingSection"
import { Bell } from "lucide-react"
import ToggleSwitch from "./ToggleSwitch"

const Notification = () => {
  const [notifications, setNotifications] = useState({
    push: true,
    email: false,
    sms: true
  })
  return (
    <SettingSection icon={Bell} title="notification">
      <div className="flex flex-col justify-between ml-6">
        <ToggleSwitch
          label={"push notification"}
          isOn={notifications.push}
          onToggle={() => setNotifications({ ...notifications, push: !notifications.push })}
        />
        <ToggleSwitch
          label={"Email notification"}
          isOn={notifications.email}
          onToggle={() => setNotifications({ ...notifications, email: !notifications.email })}
        />
        <ToggleSwitch
          label={"Sms notification"}
          isOn={notifications.sms}
          onToggle={() => setNotifications({ ...notifications, sms: !notifications.sms })}
        />
      </div>
    </SettingSection>
  )
}

export default Notification