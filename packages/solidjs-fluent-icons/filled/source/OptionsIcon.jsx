import { splitProps } from "solid-js";
function OptionsIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M17.25 5h-2.36a2.5 2.5 0 00-4.78 0H2.75a.75.75 0 000 1.5h7.36a2.5 2.5 0 004.78 0h2.36a.75.75 0 000-1.5zm-14.5 8.5a.75.75 0 000 1.5h2.36a2.5 2.5 0 004.78 0h7.36a.75.75 0 000-1.5H9.89a2.5 2.5 0 00-4.78 0H2.75z"/>
    </svg>);
}
export default OptionsIcon;
