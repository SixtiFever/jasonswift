import Firebase from "./firebase";
import React from "./react";
import ReactNative from "./react-native"

export interface LogoProps {
    height: string;
    width: string;
    native?: boolean;
}

export { Firebase, React, ReactNative }