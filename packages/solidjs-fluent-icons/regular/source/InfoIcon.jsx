import { splitProps } from "solid-js";
function InfoIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M10.5 8.91a.5.5 0 00-1 .09v4.6a.5.5 0 001-.1V8.91zm.3-2.16a.75.75 0 10-1.5 0 .75.75 0 001.5 0zM18 10a8 8 0 10-16 0 8 8 0 0016 0zM3 10a7 7 0 1114 0 7 7 0 01-14 0z"/>
    </svg>);
}
export default InfoIcon;
