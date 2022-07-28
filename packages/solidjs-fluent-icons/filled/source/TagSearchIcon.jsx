import { splitProps } from "solid-js";
function TagSearchIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M16.02 2.04a2 2 0 011.99 2v4.94a2 2 0 01-.58 1.42l-.36.36a4.5 4.5 0 10-6.31 6.3 2 2 0 01-2.8-.03l-4.94-4.95a2 2 0 010-2.83L9.7 2.6A2 2 0 0111.13 2l4.89.04zM13 6a1 1 0 102 0 1 1 0 00-2 0zm3.3 9.6a3.5 3.5 0 10-.7.7l2.55 2.55a.5.5 0 10.7-.7L16.3 15.6zm-.3-2.1a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"/>
    </svg>);
}
export default TagSearchIcon;
