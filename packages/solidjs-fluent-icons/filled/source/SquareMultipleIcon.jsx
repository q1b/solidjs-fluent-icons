import { splitProps } from "solid-js";
function SquareMultipleIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M6.09 4H5.05A2.5 2.5 0 017.5 2H14a4 4 0 014 4v6.5a2.5 2.5 0 01-2 2.45v-1.04c.58-.2 1-.76 1-1.41V6a3 3 0 00-3-3H7.5c-.65 0-1.2.42-1.41 1zM2 7.5A2.5 2.5 0 014.5 5h8A2.5 2.5 0 0115 7.5v8a2.5 2.5 0 01-2.5 2.5h-8A2.5 2.5 0 012 15.5v-8z"/>
    </svg>);
}
export default SquareMultipleIcon;
