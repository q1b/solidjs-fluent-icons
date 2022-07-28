import { splitProps } from "solid-js";
function ShareIosIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M16 9.5a.5.5 0 01.5.41V16a2.5 2.5 0 01-2.34 2.5H6a2.5 2.5 0 01-2.5-2.34V10a.5.5 0 011-.09V16c0 .78.6 1.42 1.36 1.5H14c.78 0 1.42-.6 1.5-1.36V10c0-.28.22-.5.5-.5zM5.4 6.39l4.25-4.24a.5.5 0 01.63-.06l.07.06 4.25 4.24a.5.5 0 01-.64.76l-.07-.05-3.39-3.4V13a.5.5 0 01-.41.5H10a.5.5 0 01-.5-.41V3.7L6.11 7.1a.5.5 0 01-.64.05L5.4 7.1a.5.5 0 01-.05-.64l.05-.07 4.25-4.24L5.4 6.39z"/>
    </svg>);
}
export default ShareIosIcon;
