import { splitProps } from "solid-js";
function TabArrowLeftIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M3 5.5A2.5 2.5 0 015.5 3h9A2.5 2.5 0 0117 5.5v4.1a5.46 5.46 0 00-1.5-.5V5.5a1 1 0 00-1-1h-9a1 1 0 00-1 1v9a1 1 0 001 1h3.6c.09.53.26 1.03.5 1.5H5.5A2.5 2.5 0 013 14.5v-9zM14.5 19a4.5 4.5 0 110-9 4.5 4.5 0 010 9zm-2.35-4.85a.5.5 0 00-.15.35.5.5 0 00.15.35l2 2a.5.5 0 00.7-.7L13.71 15h2.79a.5.5 0 000-1h-2.8l1.15-1.15a.5.5 0 00-.7-.7l-2 2z"/>
    </svg>);
}
export default TabArrowLeftIcon;
