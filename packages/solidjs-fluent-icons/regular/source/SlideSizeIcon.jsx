import { splitProps } from "solid-js";
function SlideSizeIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M2 6.75A2.75 2.75 0 014.75 4h10.5A2.75 2.75 0 0118 6.75v6.5A2.75 2.75 0 0115.25 16H4.75A2.75 2.75 0 012 13.25v-6.5zM4.75 5C3.78 5 3 5.78 3 6.75v6.5c0 .97.78 1.75 1.75 1.75h10.5c.97 0 1.75-.78 1.75-1.75v-6.5C17 5.78 16.22 5 15.25 5H4.75zM11 6.5c0-.28.22-.5.5-.5h2c.28 0 .5.22.5.5v2a.5.5 0 01-1 0v-.8l-1.65 1.65a.5.5 0 01-.7-.7L12.29 7h-.79a.5.5 0 01-.5-.5zm-2.35 4.15a.5.5 0 01.7.7L7.71 13h.79a.5.5 0 010 1h-2a.5.5 0 01-.5-.5v-2a.5.5 0 011 0v.8l1.65-1.65z"/>
    </svg>);
}
export default SlideSizeIcon;
