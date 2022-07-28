import { splitProps } from "solid-js";
function AlignStartHorizontalIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M3.5 18a.5.5 0 01-.5-.5v-15a.5.5 0 011 0v15a.5.5 0 01-.5.5z"/>
  <path d="M8 4a2 2 0 00-2 2v8c0 1.1.9 2 2 2h2a2 2 0 002-2V6a2 2 0 00-2-2H8zM7 6a1 1 0 011-1h2a1 1 0 011 1v8a1 1 0 01-1 1H8a1 1 0 01-1-1V6z"/>
    </svg>);
}
export default AlignStartHorizontalIcon;
