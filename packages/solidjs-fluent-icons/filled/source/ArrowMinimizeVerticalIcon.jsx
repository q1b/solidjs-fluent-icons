import { splitProps } from "solid-js";
function ArrowMinimizeVerticalIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M9.75 1.5c.41 0 .75.34.75.75v2.69l.72-.72a.75.75 0 111.06 1.06l-2 2c-.3.3-.77.3-1.06 0l-2-2a.75.75 0 011.06-1.06l.72.72V2.25c0-.41.34-.75.75-.75zM3.5 9.75c0-.41.34-.75.75-.75h11a.75.75 0 010 1.5h-11a.75.75 0 01-.75-.75zm8.78 4.47l-2-2a.75.75 0 00-1.06 0l-2 2a.75.75 0 101.06 1.06l.72-.72v2.69a.75.75 0 001.5 0v-2.69l.72.72a.75.75 0 101.06-1.06z"/>
    </svg>);
}
export default ArrowMinimizeVerticalIcon;
