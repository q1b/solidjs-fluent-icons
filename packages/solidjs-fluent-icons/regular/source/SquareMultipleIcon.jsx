import { splitProps } from "solid-js";
function SquareMultipleIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M6.09 4H5.05A2.5 2.5 0 017.5 2H14a4 4 0 014 4v6.5a2.5 2.5 0 01-2 2.45v-1.04c.58-.2 1-.76 1-1.41V6a3 3 0 00-3-3H7.5c-.65 0-1.2.42-1.41 1zM4.5 5A2.5 2.5 0 002 7.5v8A2.5 2.5 0 004.5 18h8a2.5 2.5 0 002.5-2.5v-8A2.5 2.5 0 0012.5 5h-8zM3 7.5C3 6.67 3.67 6 4.5 6h8c.83 0 1.5.67 1.5 1.5v8c0 .83-.67 1.5-1.5 1.5h-8A1.5 1.5 0 013 15.5v-8z"/>
    </svg>);
}
export default SquareMultipleIcon;
