import { splitProps } from "solid-js";
function TextGrammarDismissIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M17.5 5a.5.5 0 010 1h-15a.5.5 0 010-1h15zm0 3a.5.5 0 010 1h-15a.5.5 0 010-1h15zm-7.24 3c-.26.3-.48.64-.66 1H2.5a.5.5 0 010-1h7.76zM9 14.5c0 .17 0 .34.02.5H2.5a.5.5 0 010-1h6.52l-.02.5zm5.5 4.5a4.5 4.5 0 100-9 4.5 4.5 0 000 9zm1.15-2.65l-1.15-1.14-1.15 1.14a.5.5 0 01-.7-.7l1.14-1.15-1.14-1.15a.5.5 0 01.7-.7l1.15 1.14 1.15-1.14a.5.5 0 01.7.7l-1.14 1.15 1.14 1.15a.5.5 0 01-.7.7z"/>
    </svg>);
}
export default TextGrammarDismissIcon;
