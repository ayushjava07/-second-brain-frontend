import "./App.css"
import { PlusIcon } from "./icons/Plus"
import { ShareIcon } from "./icons/Share"
import { Button } from "./ui/Button"

const App = () => {
  return (
    <>
    <div className="bg-purple-50 min-h-screen w-[100vw] flex flex-col p-4 items-center ">
    <div className="p-4 mx-auto  w-full flex justify-between gap-8 h-20">
      <h1 className="font-bold text-fuchsia-500 font-mono text-xl">Second Brain</h1>
      <div className="flex gap-4">
        <Button variant="primary" size="medium" startIcon={PlusIcon({size:"md"})} text="add content"/>
      <Button variant="secondary" size="medium" text="share" endIcon={ShareIcon({size:"md"})}/>
      </div>
    </div>
    </div>
  </>
  )
}

export default App