import { splitProps } from "solid-js";
function BatteryChargeIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M9.63 5h3.87A2.5 2.5 0 0116 7.37v.98h1.17a.83.83 0 01.82.73l.01.1v1.67a.83.83 0 01-.72.82H16v.84a2.5 2.5 0 01-2.35 2.5H7.12a.63.63 0 01-.62-.54v-3.84c0-.31.23-.57.54-.62H7.85c.6 0 1.09-.46 1.14-1.04l.01-.1V5.62c0-.32.24-.58.54-.62h3.96-3.88zM6.29 3.34h.09c.31 0 .57.23.62.53V5h.38c.34 0 .62.29.62.63v1.91C8 8.34 7.35 9 6.54 9h-.92v5.38c0 .31-.23.57-.54.61L5 15a.63.63 0 01-.62-.54V9h-.92C2.66 9 2 8.35 2 7.54v-1.9c0-.35.28-.63.63-.63H3V3.96c0-.31.24-.57.54-.61l.08-.01c.32 0 .58.23.62.54l.01.08v1.05h1.5V3.95c0-.32.24-.58.54-.62h.09-.09z"/>
    </svg>);
}
export default BatteryChargeIcon;
