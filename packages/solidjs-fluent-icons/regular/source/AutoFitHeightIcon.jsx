import { splitProps } from "solid-js";
function AutoFitHeightIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M4 2a.5.5 0 000 1h11a.5.5 0 000-1H4zm0 15a.5.5 0 000 1h11a.5.5 0 000-1H4zM9.15 5.15c.2-.2.5-.2.7 0l2 2a.5.5 0 01-.7.7L10 6.71v6.58l1.15-1.14a.5.5 0 01.7.7l-2 2a.5.5 0 01-.7 0l-2-2a.5.5 0 01.7-.7L9 13.29V6.71L7.85 7.85a.5.5 0 11-.7-.7l2-2z"/>
    </svg>);
}
export default AutoFitHeightIcon;
