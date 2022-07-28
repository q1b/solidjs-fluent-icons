import { splitProps } from "solid-js";
function FolderArrowLeftIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M8.07 3.3l1.32.99-1.96 2.05a.5.5 0 01-.36.16H2v-1A2.5 2.5 0 014.5 3h2.67c.32 0 .64.1.9.3zm.09 3.73c-.29.3-.68.47-1.09.47H2v7A2.5 2.5 0 004.5 17h5.1a5.5 5.5 0 018.4-6.74V6.84a2.5 2.5 0 00-2.5-2.34h-4.94l-2.4 2.53zM14.5 19a4.5 4.5 0 110-9 4.5 4.5 0 010 9zm-2.35-4.85a.5.5 0 00-.15.35.5.5 0 00.15.35l2 2a.5.5 0 00.7-.7L13.71 15h2.79a.5.5 0 000-1h-2.8l1.15-1.15a.5.5 0 00-.7-.7l-2 2z"/>
    </svg>);
}
export default FolderArrowLeftIcon;
