import { memo } from "react"
import { ReactNativeLogo } from "./ReactNativeLogo"

const ReactNativeAsset = () => {
    return (
        <div>
            <div style={{ backgroundColor: '#373F51', display: 'flex', alignContent: 'center', padding: 16, borderRadius: '50%' }}>
                <ReactNativeLogo height='4rem' width="4rem"  />
            </div>
            <p className="inter-logo-title">React Native</p>
        </div>
    )
}

export default memo(ReactNativeAsset)