import { splitProps } from "solid-js";
function TextIndentDecreaseLtrIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M6 4.75c0-.41.34-.75.75-.75h7.5a.75.75 0 010 1.5h-7.5A.75.75 0 016 4.75zM6.75 9a.75.75 0 000 1.5h10.5a.75.75 0 000-1.5H6.75zm0 5a.75.75 0 000 1.5h5.5a.75.75 0 000-1.5h-5.5zm-3.28-2.22a.75.75 0 001.06-1.06l-.97-.97.97-.97a.75.75 0 00-1.06-1.06l-1.5 1.5c-.3.3-.3.77 0 1.06l1.5 1.5z"/>
    </svg>);
}
export default TextIndentDecreaseLtrIcon;
