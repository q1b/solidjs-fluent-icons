import { splitProps } from "solid-js";
function BoardSplitIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M6 3a3 3 0 00-3 3v3h8V3H6zm5 7H3v4a3 3 0 003 3h5v-7zm3 7h-2v-4h5v1a3 3 0 01-3 3zm3-5h-5V8h5v4zm0-5h-5V3h2a3 3 0 013 3v1z"/>
    </svg>);
}
export default BoardSplitIcon;
