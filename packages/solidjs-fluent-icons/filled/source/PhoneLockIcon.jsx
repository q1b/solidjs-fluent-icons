import { splitProps } from "solid-js";
function PhoneLockIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M5 3.5C5 2.67 5.67 2 6.5 2h7c.83 0 1.5.67 1.5 1.5v5.54A3 3 0 0011.5 12v.06A2 2 0 0010 14H8.5a.5.5 0 000 1H10v3H6.5A1.5 1.5 0 015 16.5v-13zm7.5 8.5v1H12a1 1 0 00-1 1v4a1 1 0 001 1h5a1 1 0 001-1v-4a1 1 0 00-1-1h-.5v-1a2 2 0 10-4 0zm1 1v-1a1 1 0 112 0v1h-2zm1 2.25a.75.75 0 110 1.5.75.75 0 010-1.5z"/>
    </svg>);
}
export default PhoneLockIcon;
