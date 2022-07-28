import { splitProps } from "solid-js";
function ArrowTurnRightIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M11.15 3.15c.2-.2.5-.2.7 0l4 4c.2.2.2.5 0 .7l-4 4a.5.5 0 01-.7-.7L14.29 8H8a2 2 0 00-2 2v6.5a.5.5 0 01-1 0V10a3 3 0 013-3h6.3l-3.15-3.15a.5.5 0 010-.7z"/>
    </svg>);
}
export default ArrowTurnRightIcon;
