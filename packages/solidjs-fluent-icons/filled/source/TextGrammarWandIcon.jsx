import { splitProps } from "solid-js";
function TextGrammarWandIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M2.75 4.5a.75.75 0 000 1.5h14.5a.75.75 0 000-1.5H2.75zm0 3a.75.75 0 000 1.5h8.5a.75.75 0 000-1.5h-8.5zm0 3a.75.75 0 000 1.5h6.63a1.5 1.5 0 01-.28-1.5H2.75zm0 3h6.63L7.88 15H2.75a.75.75 0 010-1.5zM14.5 7.44a.5.5 0 00-1 0l-.1.79a2.5 2.5 0 01-2.17 2.18l-.8.1a.5.5 0 000 .99l.8.1a2.5 2.5 0 012.18 2.17l.1.8a.5.5 0 00.99 0l.1-.8a2.5 2.5 0 012.17-2.18l.8-.1a.5.5 0 000-.99l-.8-.1a2.5 2.5 0 01-2.18-2.17l-.1-.8zm-2.65 5.7c.2.2.2.52 0 .71l-4 4a.5.5 0 01-.7-.7l4-4c.2-.2.5-.2.7 0z"/>
    </svg>);
}
export default TextGrammarWandIcon;
