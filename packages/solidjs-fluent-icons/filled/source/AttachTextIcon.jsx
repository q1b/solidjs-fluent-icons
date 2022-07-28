import { splitProps } from "solid-js";
function AttachTextIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M6.75 3.5c-1.24 0-2.25 1-2.25 2.25v7.5a.75.75 0 01-1.5 0v-7.5a3.75 3.75 0 017.5-.25v10.25a2.25 2.25 0 01-4.5 0V5.77a.75.75 0 011.5 0v9.98a.75.75 0 001.5 0v-10C9 4.51 8 3.5 6.75 3.5zM12 8.25c0-.41.34-.75.75-.75h4.5a.75.75 0 010 1.5h-4.5a.75.75 0 01-.75-.75zm.75-3.75a.75.75 0 000 1.5h4.5a.75.75 0 000-1.5h-4.5zM12 11.25c0-.41.34-.75.75-.75h4.5a.75.75 0 010 1.5h-4.5a.75.75 0 01-.75-.75zm.75 2.25a.75.75 0 000 1.5h2a.75.75 0 000-1.5h-2z"/>
    </svg>);
}
export default AttachTextIcon;
