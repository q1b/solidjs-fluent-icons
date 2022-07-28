import { splitProps } from "solid-js";
function TextGrammarCheckmarkIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M18 5.75a.75.75 0 00-.75-.75H2.75a.75.75 0 000 1.5h14.5c.41 0 .75-.34.75-.75zm0 3a.75.75 0 00-.75-.75H2.75a.75.75 0 000 1.5h9.46a5.48 5.48 0 014.58 0h.46c.41 0 .75-.34.75-.75zM9.02 14a5.57 5.57 0 00.07 1.5H2.75a.75.75 0 010-1.5h6.27zm1.24-3a5.5 5.5 0 00-.89 1.5H2.75a.75.75 0 010-1.5h7.5zM19 14.5a4.5 4.5 0 10-9 0 4.5 4.5 0 009 0zm-2.5-2a.5.5 0 01.75.66l-.06.06-3.51 3.65a.5.5 0 01-.67.02l-.07-.07-1.34-1.65a.5.5 0 01.72-.7l.06.07 1 1.23 3.12-3.27z"/>
    </svg>);
}
export default TextGrammarCheckmarkIcon;
