import { HelpCircle } from "lucide-react"
import SettingSection from "./SettingSection"
import { useState } from "react"



const ConnectedAccount = () => {
  const [connectedAcount, setonnectedAcount] = useState([
    {
      id: 1,
      name: "Google",
      connected: true,
      icon: "Google.png"
    },
    {
      id: 2,
      name: "FaceBook",
      connected: false,
      icon: "FaceBook.png"
    },
    {
      id: 3,
      name: "Twitter",
      connected: false,
      icon: "x.png"
    },
  ])
  return (
    <SettingSection icon={HelpCircle} title="Connected Acounts">
      {connectedAcount.map((account) => (
        <div key={account.id} className="flex items-center justify-between my-3 pl-6">
          <div className="flex gap-1">
            <img src={account.icon} alt="" className="size-6 rounded-full mr-2" />
            <span className="text-gray-300 hidden sm:inline-block">{account.name}</span>
          </div>
          <button className={`px-3 py-1 rounded ${account.connected ? "bg-green-700" : "bg-gray-600"} transition duration-200`}
            onClick={() => {
              setonnectedAcount(
                connectedAcount.map((acc) => {
                  if (acc.id === account.id) {
                    return {
                      ...acc,
                      connected: !acc.connected
                    }
                  }
                  return acc
                })
              )
            }}
          >
            {account.connected ? "Connected" : "Connect"}
          </button>
        </div>
      ))}
    </SettingSection>
  )
}

export default ConnectedAccount