import { splitProps } from "solid-js";
function SlideSizeIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M2 6.75A2.75 2.75 0 014.75 4h10.5A2.75 2.75 0 0118 6.75v6.5A2.75 2.75 0 0115.25 16H4.75A2.75 2.75 0 012 13.25v-6.5zm9-.25c0 .28.22.5.5.5h.8l-1.65 1.65a.5.5 0 00.7.7L13 7.71v.79a.5.5 0 001 0v-2a.5.5 0 00-.5-.5h-2a.5.5 0 00-.5.5zm-1.65 4.15a.5.5 0 00-.7 0L7 12.29v-.79a.5.5 0 00-1 0v2a.5.5 0 00.5.5h2a.5.5 0 000-1h-.8l1.65-1.65a.5.5 0 000-.7z"/>
    </svg>);
}
export default SlideSizeIcon;
