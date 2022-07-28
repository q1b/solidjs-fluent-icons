import { splitProps } from "solid-js";
function SaveIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M3 5c0-1.1.9-2 2-2h1v3.5C6 7.33 6.67 8 7.5 8h4c.83 0 1.5-.67 1.5-1.5V3h.38a2 2 0 011.41.59l1.62 1.62A2 2 0 0117 6.62V15a2 2 0 01-2 2v-5.5c0-.83-.67-1.5-1.5-1.5h-7c-.83 0-1.5.67-1.5 1.5V17a2 2 0 01-2-2V5zm9-2H7v3.5c0 .28.22.5.5.5h4a.5.5 0 00.5-.5V3zm2 8.5V17H6v-5.5c0-.28.22-.5.5-.5h7c.28 0 .5.22.5.5z"/>
    </svg>);
}
export default SaveIcon;
