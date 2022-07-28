import { splitProps } from "solid-js";
function WindowHeaderHorizontalOffIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M2.85 2.15a.5.5 0 10-.7.7L3.4 4.12C3.15 4.52 3 5 3 5.5v9A2.5 2.5 0 005.5 17h9c.5 0 .98-.15 1.38-.41l1.27 1.26a.5.5 0 00.7-.7l-15-15zm11.9 13.32a1 1 0 01-.25.03h-9a1 1 0 01-1-1V7h1.8l8.46 8.47zM15.5 7v6.38l1.48 1.47.02-.35v-9A2.5 2.5 0 0014.5 3h-9c-.12 0-.24 0-.35.02L9.12 7h6.38z"/>
    </svg>);
}
export default WindowHeaderHorizontalOffIcon;
