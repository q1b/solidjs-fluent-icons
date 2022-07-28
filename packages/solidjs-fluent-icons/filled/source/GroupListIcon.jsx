import { splitProps } from "solid-js";
function GroupListIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M2.75 2a.75.75 0 00-.75.75v6c0 .41.34.75.75.75h2.5a.75.75 0 000-1.5H3.5V3.5h1.75a.75.75 0 000-1.5h-2.5zm0 8.5a.75.75 0 00-.75.75v6c0 .41.34.75.75.75h2.5a.75.75 0 000-1.5H3.5V12h1.75a.75.75 0 000-1.5h-2.5zm5 1.5a.75.75 0 000 1.5h9.5a.75.75 0 000-1.5h-9.5zM7 15.75c0-.41.34-.75.75-.75h9.5a.75.75 0 010 1.5h-9.5a.75.75 0 01-.75-.75zm0-11.5c0-.41.34-.75.75-.75h9.5a.75.75 0 010 1.5h-9.5A.75.75 0 017 4.25zm.75 2.25a.75.75 0 000 1.5h9.5a.75.75 0 000-1.5h-9.5z"/>
    </svg>);
}
export default GroupListIcon;
