import { splitProps } from "solid-js";
function LayerIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M10.5 3.12a1 1 0 00-1 0L3.47 6.64a1 1 0 000 1.72l6.02 3.5a1 1 0 001 0l6.01-3.5a1 1 0 000-1.72l-6-3.52zM3.07 9.65l6.44 3.62a1 1 0 00.98 0l6.44-3.62a1 1 0 01-.42 1.26l-6 3.5a1 1 0 01-1.01 0l-6.01-3.5a1 1 0 01-.42-1.26zm0 2.45l6.44 3.63a1 1 0 00.98 0l6.44-3.63a1 1 0 01-.42 1.26l-6 3.5a1 1 0 01-1.01 0l-6.01-3.5a1 1 0 01-.42-1.26z"/>
    </svg>);
}
export default LayerIcon;
