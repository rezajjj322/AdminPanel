import SettingSection from "./SettingSection"
import { Lock } from "lucide-react"
import ToggleSwitch from "./ToggleSwitch"
import { useState } from "react"


const Security = () => {
    const [factor, setFactor] = useState(false)
    return (
        <SettingSection icon={Lock} title="Security">
            <div className="flex flex-col justify-between">
            <ToggleSwitch
                label={"Two-Factor Authentication"}
                isOn={factor}
                onToggle={() => setFactor(!factor)}
            />
            </div>
            <div className="mt-4">
                <button className="sm:px-2 py-2 rounded-lg bg-indigo-600 text-white mt-1">
                    changed Password
                </button>
            </div>
        </SettingSection>
    )
}

export default Security