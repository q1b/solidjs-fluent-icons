import { splitProps } from "solid-js";
function LineIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M17.78 2.22c.3.3.3.77 0 1.06l-14.5 14.5a.75.75 0 01-1.06-1.06l14.5-14.5c.3-.3.77-.3 1.06 0z"/>
    </svg>);
}
export default LineIcon;
