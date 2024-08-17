import OFFline from "./OFFline";
import Online from "./Online";


export default function Saidbar() {
  return (
    <div className="w-[20%] flex flex-col gap-y-12">
<OFFline/>
<Online/>
    </div>
  )
}
