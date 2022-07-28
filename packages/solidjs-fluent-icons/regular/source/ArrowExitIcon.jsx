import { splitProps } from "solid-js";
function ArrowExitIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M12.5 17a.5.5 0 000-1H6a2 2 0 01-2-2V6c0-1.1.9-2 2-2h6.5a.5.5 0 000-1H6a3 3 0 00-3 3v8a3 3 0 003 3h6.5zm1.15-10.85c.2-.2.5-.2.7 0l3.5 3.5c.2.2.2.5 0 .7l-3.5 3.5a.5.5 0 01-.7-.7l2.64-2.65H7.5a.5.5 0 010-1h8.8l-2.65-2.65a.5.5 0 010-.7z"/>
    </svg>);
}
export default ArrowExitIcon;
