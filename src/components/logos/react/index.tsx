import { memo } from "react"
import { ReactLogo } from "./ReactLogo"

const ReactAsset = () => {
    return (
        <div>
            <div style={{ backgroundColor: '#373F51', display: 'flex', alignContent: 'center', padding: 16, borderRadius: '50%' }}>
                <ReactLogo height='4rem' width="4rem"  />
            </div>
            <p className="inter-logo-title">React</p>
        </div>
    )
}

export default memo(ReactAsset)