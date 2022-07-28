import { splitProps } from "solid-js";
function FastForwardIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M10.02 5.49a1 1 0 011.59-.81l5.88 4.31c.68.5.68 1.52 0 2.02l-5.88 4.3a1 1 0 01-1.6-.8v-3.16l-5.4 3.97a1 1 0 01-1.6-.8V5.48a1 1 0 011.6-.81l5.4 3.97V5.49z"/>
    </svg>);
}
export default FastForwardIcon;
