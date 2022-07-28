import { splitProps } from "solid-js";
function WifiLockIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M16.73 7.56c.4.4.78.87 1.11 1.35a.75.75 0 01-1.23.85A7.97 7.97 0 005.06 8.03a3 3 0 00-2.4 2.02.75.75 0 01-.42-1.15 9.47 9.47 0 0114.5-1.34zm-5.8 8.08c-.26.25-.6.37-.93.36v-2.48a1.24 1.24 0 01.92 2.12zm.96-2.74a2.63 2.63 0 00-2.08-.76 2 2 0 00-1.31-1.08V11v-.07a4.13 4.13 0 015.32 2.2.75.75 0 01-1.37.6c-.13-.31-.33-.6-.56-.83zm1.64-2.39a4.94 4.94 0 00-5.45-1.04 3.01 3.01 0 00-1.15-1.1 6.45 6.45 0 018.85 2.73.75.75 0 11-1.33.69 5.13 5.13 0 00-.92-1.28zM3.5 11v1H3a1 1 0 00-1 1v4a1 1 0 001 1h5a1 1 0 001-1v-4a1 1 0 00-1-1h-.5v-1a2 2 0 10-4 0zm1 1v-1a1 1 0 112 0v1h-2zm1 2.25a.75.75 0 110 1.5.75.75 0 010-1.5z"/>
    </svg>);
}
export default WifiLockIcon;
