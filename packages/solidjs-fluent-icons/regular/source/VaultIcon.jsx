import { splitProps } from "solid-js";
function VaultIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M13.72 11.02a2 2 0 000-2.04l.63-.63a.5.5 0 00-.7-.7l-.63.63a2 2 0 00-2.04 0l-.63-.63a.5.5 0 00-.7.7l.63.63a2 2 0 000 2.04l-.63.63a.5.5 0 00.7.7l.63-.63a2 2 0 002.04 0l.63.63a.5.5 0 00.7-.7l-.63-.63zM12 11a1 1 0 110-2 1 1 0 010 2zM6 7.5a.5.5 0 00-1 0v5a.5.5 0 001 0v-5zM2 7a3 3 0 013-3h10a3 3 0 013 3v6a3 3 0 01-3 3H5a3 3 0 01-3-3V7zm3-2a2 2 0 00-2 2v6c0 1.1.9 2 2 2h10a2 2 0 002-2V7a2 2 0 00-2-2H5z"/>
    </svg>);
}
export default VaultIcon;
