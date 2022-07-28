import { splitProps } from "solid-js";
function SelectAllOffIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M4 2a2 2 0 00-2 2v10c0 1.1.9 2 2 2h10a2 2 0 002-2V4a2 2 0 00-2-2H4zm.27 15c.34.6.99 1 1.73 1h8a4 4 0 004-4V6a2 2 0 00-1-1.73V14a3 3 0 01-3 3H4.27z"/>
    </svg>);
}
export default SelectAllOffIcon;
