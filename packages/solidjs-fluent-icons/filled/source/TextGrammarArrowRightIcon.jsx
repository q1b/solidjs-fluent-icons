import { splitProps } from "solid-js";
function TextGrammarArrowRightIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M5.5 10a4.5 4.5 0 100 9 4.5 4.5 0 000-9zm-2.35 4.85A.5.5 0 013 14.5a.5.5 0 01.15-.35l2-2a.5.5 0 01.7.7L4.71 14H7.5a.5.5 0 010 1H4.7l1.15 1.15a.5.5 0 01-.7.7l-2-2zM2 5.75c0-.41.34-.75.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 5.75zm0 3c0-.41.34-.75.75-.75h14.5a.75.75 0 010 1.5H7.79a5.48 5.48 0 00-4.58 0h-.46A.75.75 0 012 8.75zm8.9 6.75h6.35a.75.75 0 000-1.5h-6.27a5.59 5.59 0 01-.07 1.5zm-.27-3h6.62a.75.75 0 000-1.5h-7.5c.36.45.66.95.88 1.5z"/>
    </svg>);
}
export default TextGrammarArrowRightIcon;
