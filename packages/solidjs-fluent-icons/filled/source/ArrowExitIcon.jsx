import { splitProps } from "solid-js";
function ArrowExitIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M12.75 17.5a.75.75 0 000-1.5H6.5a2 2 0 01-2-2V6c0-1.1.9-2 2-2h6.25a.75.75 0 000-1.5H6.5A3.5 3.5 0 003 6v8a3.5 3.5 0 003.5 3.5h6.25zm1-11.3a.75.75 0 011.05.04l3 3.25c.27.29.27.73 0 1.02l-3 3.25a.75.75 0 11-1.1-1.02l1.84-1.99H7.75a.75.75 0 010-1.5h7.79l-1.84-2a.75.75 0 01.04-1.05z"/>
    </svg>);
}
export default ArrowExitIcon;
