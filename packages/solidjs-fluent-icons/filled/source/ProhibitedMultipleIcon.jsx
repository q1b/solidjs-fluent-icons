import { splitProps } from "solid-js";
function ProhibitedMultipleIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M9 2a7 7 0 110 14A7 7 0 019 2zm3.32 2.62a5.5 5.5 0 00-7.7 7.7l7.7-7.7zm1.06 1.06l-7.7 7.7a5.5 5.5 0 007.7-7.7zM9 17a8 8 0 007.75-10 7 7 0 01-9.74 9.74c.63.17 1.3.26 1.99.26z"/>
    </svg>);
}
export default ProhibitedMultipleIcon;
