import { splitProps } from "solid-js";
function NavigationPlayIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M2.75 5a.75.75 0 000 1.5h14.5a.75.75 0 000-1.5H2.75zM2 10.75c0-.41.34-.75.75-.75h9.59c-.58.4-1.07.91-1.45 1.5H2.75a.75.75 0 01-.75-.75zM2.75 15h7.27c.05.52.17 1.03.35 1.5H2.75a.75.75 0 010-1.5zM20 14.5a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm-2.29-.44l-2.97-1.65a.5.5 0 00-.74.44v3.3c0 .38.41.62.74.44l2.97-1.65a.5.5 0 000-.88z"/>
    </svg>);
}
export default NavigationPlayIcon;
