import { splitProps } from "solid-js";
function VaultIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M12 11a1 1 0 100-2 1 1 0 000 2zM2 7a3 3 0 013-3h10a3 3 0 013 3v6a3 3 0 01-3 3H5a3 3 0 01-3-3V7zm3.5 0a.5.5 0 00-.5.5v5a.5.5 0 001 0v-5a.5.5 0 00-.5-.5zm8.85.65a.5.5 0 00-.7 0l-.63.63a2 2 0 00-2.04 0l-.63-.63a.5.5 0 00-.7.7l.63.63a2 2 0 000 2.04l-.63.63a.5.5 0 00.7.7l.63-.63a2 2 0 002.04 0l.63.63a.5.5 0 00.7-.7l-.63-.63a2 2 0 000-2.04l.63-.63a.5.5 0 000-.7z"/>
    </svg>);
}
export default VaultIcon;
