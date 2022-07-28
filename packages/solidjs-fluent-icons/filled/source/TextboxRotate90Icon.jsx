import { splitProps } from "solid-js";
function TextboxRotate90Icon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M17 5.5A2.5 2.5 0 0014.5 3h-9A2.5 2.5 0 003 5.5v9A2.5 2.5 0 005.5 17h9a2.5 2.5 0 002.5-2.5v-9zM7.5 6.7v6.6c0 .38-.34.7-.75.7S6 13.68 6 13.3V6.7c0-.38.34-.7.75-.7s.75.32.75.7zM9.75 6c.41 0 .75.32.75.7v3.6c0 .38-.34.7-.75.7S9 10.68 9 10.3V6.7c0-.38.34-.7.75-.7zm3 0c.41 0 .75.32.75.7v6.6c0 .38-.34.7-.75.7s-.75-.32-.75-.7V6.7c0-.38.34-.7.75-.7z"/>
    </svg>);
}
export default TextboxRotate90Icon;
