import { splitProps } from "solid-js";
function ArrowImportIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M17.25 3.75c.41 0 .75.34.75.75v11a.75.75 0 01-1.5 0v-11c0-.41.34-.75.75-.75zM2 10c0-.41.34-.75.75-.75h10.19l-2.72-2.72a.75.75 0 111.06-1.06l4 4a.77.77 0 01.15.22.75.75 0 01-.15.84l-4 4a.75.75 0 11-1.06-1.06l2.72-2.72H2.75A.75.75 0 012 10z"/>
    </svg>);
}
export default ArrowImportIcon;
