import { splitProps } from "solid-js";
function FlipHorizontalIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M17.88 15.66a.75.75 0 01-.63.34h-5.5a.75.75 0 01-.75-.75V2.75a.75.75 0 011.44-.3l5.5 12.5c.1.23.08.5-.06.71zM12.5 6.32v8.18h3.6l-3.6-8.18zM2.5 16a.5.5 0 01-.45-.71l6-13A.5.5 0 019 2.5v13a.5.5 0 01-.5.5h-6z"/>
    </svg>);
}
export default FlipHorizontalIcon;
