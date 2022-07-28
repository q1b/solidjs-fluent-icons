import { splitProps } from "solid-js";
function RatioOneToOneIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M4.75 4A2.75 2.75 0 002 6.75v6.5A2.75 2.75 0 004.75 16h10.5A2.75 2.75 0 0018 13.25v-6.5A2.75 2.75 0 0015.25 4H4.75zM7 7.5v5a.5.5 0 01-1 0V8.3l-.28.15a.5.5 0 11-.44-.9l1-.5A.5.5 0 017 7.5zm7 0v5a.5.5 0 11-1 0V8.3l-.28.15a.5.5 0 11-.44-.9l1-.5a.5.5 0 01.72.45zm-4 1a.5.5 0 11-1 0 .5.5 0 011 0zM9.5 12a.5.5 0 110-1 .5.5 0 010 1z"/>
    </svg>);
}
export default RatioOneToOneIcon;
