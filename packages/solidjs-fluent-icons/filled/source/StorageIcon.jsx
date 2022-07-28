import { splitProps } from "solid-js";
function StorageIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M2 8.5A2.5 2.5 0 014.5 6h11A2.5 2.5 0 0118 8.5v3a2.5 2.5 0 01-2.5 2.5h-11A2.5 2.5 0 012 11.5v-3zM13 9a1 1 0 10-2 0 1 1 0 002 0zm3 0a1 1 0 10-2 0 1 1 0 002 0z"/>
    </svg>);
}
export default StorageIcon;
