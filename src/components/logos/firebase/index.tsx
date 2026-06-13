import { memo } from "react"
import { FirebaseLogo } from "./FirebaseLogo"

const FirebaseAsset = () => {
    return (
        <div>
            <div style={{ backgroundColor: '#373F51', display: 'flex', alignContent: 'center', padding: 16, borderRadius: '50%' }}>
                <FirebaseLogo height='4rem' width="4rem"  />
            </div>
            <p className="inter-logo-title">Firebase</p>
        </div>
    )
}

export default memo(FirebaseAsset)