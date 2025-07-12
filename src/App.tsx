import "./App.css"
import { PlusIcon } from "./icons/Plus"
import { Button } from "./ui/Button"

const App = () => {
  return (
    <>
    <div className="bg-blue-200 min-h-screen w-[100vw] p-4">
    <div className="mx-auto  w-fit flex gap-8 h-10">
      <Button variant="primary" size="medium" startIcon={PlusIcon()} text="hiiii"/>
    <Button variant="secondary" size="small" text="hiiii" endIcon={PlusIcon()}/>
    </div>
    </div>
  </>
  )
}

export default App