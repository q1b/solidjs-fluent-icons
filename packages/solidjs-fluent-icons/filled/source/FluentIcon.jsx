import { splitProps } from "solid-js";
function FluentIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M10.28 2.05a.5.5 0 01.44 0l5 2.5a.5.5 0 010 .9l-4.1 2.05 4.1 2.05a.5.5 0 010 .9L11 12.8v4.69a.5.5 0 01-.76.43l-5-3A.5.5 0 015 14.5V5c0-.19.1-.36.28-.45l5-2.5z"/>
    </svg>);
}
export default FluentIcon;
